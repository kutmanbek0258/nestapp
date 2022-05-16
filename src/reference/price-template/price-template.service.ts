import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePriceTemplateDto } from './dto/create-price-template.dto';
import { UpdatePriceTemplateDto } from './dto/update-price-template.dto';
import { PriceTemplate } from './interfaces/price-template.interface';

@Injectable()
export class PriceTemplateService {

  constructor(@InjectModel('PriceTemplate') private readonly priceTemplateModel: Model<PriceTemplate>){}

  async create(createPriceTemplateDto: CreatePriceTemplateDto) {
    const priceTemplate = new this.priceTemplateModel(createPriceTemplateDto)
    return await priceTemplate.save();
  }

  async findAll() {
    return await this.priceTemplateModel.find();
  }

  async findOne(id: string) {
    return await this.priceTemplateModel.findById(id);
  }

  async update(id: string, updatePriceTemplateDto: UpdatePriceTemplateDto) {
    return await this.priceTemplateModel.findByIdAndUpdate(id, updatePriceTemplateDto);
  }

  async remove(id: string) {
    return await this.priceTemplateModel.findByIdAndRemove(id);
  }
}
