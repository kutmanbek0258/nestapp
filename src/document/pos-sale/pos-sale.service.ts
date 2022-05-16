import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePosSaleDto } from './dto/create-pos-sale.dto';
import { UpdatePosSaleDto } from './dto/update-pos-sale.dto';
import { POSSaleItem } from './interfaces/pos-sale-item.interface';
import { POSSale } from './interfaces/pos-sale.interface';

@Injectable()
export class PosSaleService {

  constructor(
    @InjectModel('POSSale') private readonly POSSaleModel: Model<POSSale>,
    @InjectModel('POSSaleItem') private readonly POSSaleItemModel: Model<POSSaleItem>
  ){}

  create(createPosSaleDto: CreatePosSaleDto) {
    return 'This action adds a new posSale';
  }

  findAll() {
    return `This action returns all posSale`;
  }

  findOne(id: number) {
    return `This action returns a #${id} posSale`;
  }

  update(id: number, updatePosSaleDto: UpdatePosSaleDto) {
    return `This action updates a #${id} posSale`;
  }

  remove(id: number) {
    return `This action removes a #${id} posSale`;
  }
}
