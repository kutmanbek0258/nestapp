import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Shop } from './interfaces/shop.interface';

@Injectable()
export class ShopService {

  constructor(@InjectModel('Shop') private readonly shopModel: Model<Shop>){}

  async create(createShopDto: CreateShopDto) {
    const shop = new this.shopModel(createShopDto)
    return await shop.save();
  }

  async findAll() {
    return await this.shopModel.find();
  }

  async findOne(id: string) {
    return await this.shopModel.findById(id)
      .populate('receipt_depot', 'name')
      .populate('sale_depot', 'name')
      .populate('price_template', 'name');
  }

  async update(id: string, updateShopDto: UpdateShopDto) {
    return await this.shopModel.findByIdAndUpdate(id, updateShopDto);
  }

  async remove(id: string) {
    return await this.shopModel.findByIdAndRemove(id);
  }
}
