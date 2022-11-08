import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddPosCheckItemDto } from './dto/add-pos-check-item.dto';
import { CreatePosCheckDto } from './dto/create-pos-check.dto';
import { UpdatePosCheckItemDto } from './dto/update-pos-check-item.tdo';
import { UpdatePosCheckDto } from './dto/update-pos-check.dto';
import { POSCheckItem } from './interfaces/pos-check-item.interface';
import { POSCheck } from './interfaces/pos-check.interface';

@Injectable()
export class PosCheckService {
  constructor(
    @InjectModel('POSCheck') private readonly posCheckModel: Model<POSCheck>,
    @InjectModel('POSCheckItem')
    private readonly posCheckItemModel: Model<POSCheckItem>,
  ) {}

  async create(createPosCheckDto: CreatePosCheckDto) {
    const posCheck = new this.posCheckModel(createPosCheckDto);
    return await posCheck.save();
  }

  async findAll() {
    return await this.posCheckModel.find();
  }

  async findOne(id: string) {
    return await this.posCheckModel.findById(id);
  }

  async findPosCheckListShift(shiftId: string) {
    return await this.posCheckModel.find({ shift: shiftId });
  }

  async update(id: string, updatePosCheckDto: UpdatePosCheckDto) {
    return await this.posCheckModel.findByIdAndUpdate(id, updatePosCheckDto);
  }

  async updateAllForShift(shiftId: string, isArchive: boolean) {
    return await this.posCheckModel.updateMany(
      { shift: shiftId },
      { archive: isArchive },
    );
  }

  async remove(id: string) {
    return await this.posCheckModel.findByIdAndDelete(id);
  }

  async addPosCheckItem(addPosCheckItemDto: AddPosCheckItemDto) {
    const posCheckItem = new this.posCheckItemModel(addPosCheckItemDto);
    return await posCheckItem.save();
  }

  async updatePosCheckItem(
    id: string,
    updatePosCheckItemDto: UpdatePosCheckItemDto,
  ) {
    return await this.posCheckItemModel.findByIdAndUpdate(
      id,
      updatePosCheckItemDto,
    );
  }

  async findAllPosCheckItem(posCheckId: string) {
    return await this.posCheckItemModel
      .find({ POSCheck: posCheckId })
      .populate('product', 'name');
  }

  async findPosCheckItemOne(id: string) {
    return await this.posCheckItemModel.findById(id);
  }

  async removePosCheckItem(id: string) {
    return await this.posCheckItemModel.findByIdAndRemove(id);
  }
}
