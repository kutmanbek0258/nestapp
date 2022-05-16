import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePOSDto } from './dto/create-pos.dto';
import { UpdatePOSDto } from './dto/update-pos.dto';
import { POS } from './interfaces/pos.interface';

@Injectable()
export class PosService {

  constructor(@InjectModel('POS') private readonly posModel: Model<POS>){}

  async create(createPOSDto: CreatePOSDto) {
    const POS = new this.posModel(createPOSDto)
    return await POS.save();
  }

  async findAll() {
    return await this.posModel.find();
  }

  async findOne(id: string) {
    return await this.posModel.findById(id).populate('shop', 'name address email ');
  }

  async update(id: string, updatePOSDto: UpdatePOSDto) {
    return await this.posModel.findByIdAndUpdate(id, updatePOSDto);
  }

  async remove(id: string) {
    return await this.posModel.findByIdAndRemove(id);
  }
}
