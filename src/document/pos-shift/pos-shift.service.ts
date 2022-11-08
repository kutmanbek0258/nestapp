import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { OpenPosShiftDto } from './dto/open-pos-shift.dto';
import { POSShift } from './interfaces/pos-shift.interface';
import { PosSaleService } from '../pos-sale/pos-sale.service';
import { PosCheckService } from '../pos-check/pos-check.service';
import { CreatePosSaleDto } from '../pos-sale/dto/create-pos-sale.dto';
import { AddPosSaleItemDto } from '../pos-sale/dto/add-pos-sale-item.dto';
import { AddPosCheckItemDto } from '../pos-check/dto/add-pos-check-item.dto';
import { POSSale } from '../pos-sale/interfaces/pos-sale.interface';

@Injectable()
export class PosShiftService {
  constructor(
    @InjectModel('POSShift') private readonly POSShiftModel: Model<POSShift>,
    @InjectConnection() private mongooseConnection: Connection,
    private readonly posSaleService: PosSaleService,
    private readonly posCheckService: PosCheckService,
  ) {}

  async open(openPosShiftDto: OpenPosShiftDto) {
    const openPosShift = new this.POSShiftModel(openPosShiftDto);
    openPosShift.open = true;
    return await openPosShift.save();
  }

  async close(id: string) {
    const mongooseSession = await this.mongooseConnection.startSession();

    mongooseSession.startTransaction();

    let responsePayload = null;

    try {
      const posShift = await this.POSShiftModel.findById(id).populate(
        'POS',
        'shop',
      );

      if (!posShift.open) {
        throw new HttpException('POS shift closed!', HttpStatus.FORBIDDEN);
      }

      const shiftPosChecks = await this.posCheckService.findPosCheckListShift(
        id,
      );

      const shiftAllCheckItems: AddPosCheckItemDto[] = [];
      for (const shiftPosCheck of shiftPosChecks) {
        const shiftPosCheckAllItems =
          await this.posCheckService.findAllPosCheckItem(shiftPosCheck.id);
        for (const shiftPosCheckItem of shiftPosCheckAllItems) {
          shiftAllCheckItems.push(shiftPosCheckItem);
        }
      }

      await this.posCheckService.updateAllForShift(id, true);

      const createPosSaleDto: CreatePosSaleDto = new CreatePosSaleDto();

      createPosSaleDto.shift = posShift.id;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      createPosSaleDto.POS = posShift.POS.id;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      createPosSaleDto.shop = posShift.POS.shop;
      createPosSaleDto.salesman = posShift.salesman;
      createPosSaleDto.comment = 'comment';

      const posShiftSale: POSSale = await this.posSaleService.create(
        createPosSaleDto,
      );

      for (const shiftAllCheckItem of shiftAllCheckItems) {
        const addPosSaleItemDto: AddPosSaleItemDto = new AddPosSaleItemDto();
        addPosSaleItemDto.POSSale = posShiftSale.id;
        addPosSaleItemDto.product = shiftAllCheckItem.product;
        addPosSaleItemDto.quantity = shiftAllCheckItem.quantity;
        addPosSaleItemDto.price = shiftAllCheckItem.price;
        addPosSaleItemDto.currency = shiftAllCheckItem.currency;
        await this.posSaleService.addPosSaleItem(addPosSaleItemDto);
      }

      const posShiftUpdated = await this.POSShiftModel.findByIdAndUpdate(id, {
        open: false,
        close_at: Date.now(),
      });

      responsePayload = {
        posShiftUpdated: posShiftUpdated,
        shiftPosChecks: shiftPosChecks,
        shiftAllCheckItems: shiftAllCheckItems,
        shiftSale: posShiftSale,
      };

      await mongooseSession.commitTransaction();
    } catch (error) {
      await mongooseSession.abortTransaction();
      if (error.status == 403) {
        throw new HttpException(
          { message: 'POS shift closed!' },
          HttpStatus.FORBIDDEN,
        );
      }
      throw new InternalServerErrorException(error);
    } finally {
      await mongooseSession.endSession();
    }

    return responsePayload;
  }

  // create(createPosShiftDto: CreatePosShiftDto) {
  //   return 'This action adds a new posShift';
  // }

  // findAll() {
  //   return `This action returns all posShift`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} posShift`;
  // }

  // update(id: number, updatePosShiftDto: UpdatePosShiftDto) {
  //   return `This action updates a #${id} posShift`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} posShift`;
  // }
}
