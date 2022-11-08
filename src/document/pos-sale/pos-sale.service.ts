import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddPosSaleItemDto } from './dto/add-pos-sale-item.dto';
import { CreatePosSaleDto } from './dto/create-pos-sale.dto';
import { UpdatePosSaleItemDto } from './dto/update-pos-sale-item.dto';
import { UpdatePosSaleDto } from './dto/update-pos-sale.dto';
import { POSSaleItem } from './interfaces/pos-sale-item.interface';
import { POSSale } from './interfaces/pos-sale.interface';

@Injectable()
export class PosSaleService {
  constructor(
    @InjectModel('POSSale') private readonly POSSaleModel: Model<POSSale>,
    @InjectModel('POSSaleItem')
    private readonly POSSaleItemModel: Model<POSSaleItem>,
  ) {}

  async create(createPosSaleDto: CreatePosSaleDto) {
    const posSale = new this.POSSaleModel(createPosSaleDto);
    return await posSale.save();
  }

  async findAll() {
    return await this.POSSaleModel.find();
  }

  async findOne(id: string) {
    return await this.POSSaleModel.findById(id);
  }

  async update(id: string, updatePosSaleDto: UpdatePosSaleDto) {
    return await this.POSSaleModel.findByIdAndUpdate(id, updatePosSaleDto);
  }

  async remove(id: string) {
    return await this.POSSaleModel.findByIdAndDelete(id);
  }

  async addPosSaleItem(addPosSaleItemDto: AddPosSaleItemDto) {
    const posSaleItem = new this.POSSaleItemModel(addPosSaleItemDto);
    return await posSaleItem.save();
  }

  async updatePosSaleItem(
    id: string,
    updatePosSaleItemDto: UpdatePosSaleItemDto,
  ) {
    return await this.POSSaleItemModel.findByIdAndUpdate(
      id,
      updatePosSaleItemDto,
    );
  }

  async findAllPosSaleItem(posSaleId: string) {
    return await this.POSSaleItemModel.find({ POSSale: posSaleId });
  }

  async findPosSaleItemOne(posSaleItemId: string) {
    return await this.POSSaleItemModel.findById(posSaleItemId);
  }

  async removePosSaleItem(posSaleItemId: string) {
    return await this.POSSaleItemModel.findByIdAndDelete(posSaleItemId);
  }
}
