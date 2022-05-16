import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { Currency } from './interfaces/currency.interface';

@Injectable()
export class CurrencyService {

  constructor(@InjectModel('Currency') private readonly currencyModel: Model<Currency>){}

  async create(createCurrencyDto: CreateCurrencyDto) {
    const currency = await new this.currencyModel(createCurrencyDto).save();
    return  {currency: currency};
  }

  async findAll() {
    const currencies = await this.currencyModel.find();
    return {currencies: currencies}
  }

  async findOne(id: string) {
    const currency = await this.currencyModel.findById(id);
    return {currency: currency}
  }

  async update(id: string, updateCurrencyDto: UpdateCurrencyDto) {
    return await this.currencyModel.findByIdAndUpdate(id, updateCurrencyDto);
  }

  async remove(id: string) {
    return await this.currencyModel.findByIdAndRemove(id);
  }
}
