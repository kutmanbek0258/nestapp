import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDepotDto } from './dto/create-depot.dto';
import { UpdateDepotDto } from './dto/update-depot.dto';
import { Depot } from './interfaces/depot.interface';

@Injectable()
export class DepotService {

  constructor(@InjectModel('Depot') private readonly depotModel: Model<Depot>){}

  async create(createDepotDto: CreateDepotDto) {
    const depot = await new this.depotModel(createDepotDto).save();
    return {depot: depot};
  }

  async findAll() {
    const depots = await this.depotModel.find();
    return {depots: depots};
  }

  async findOne(id: string) {
    const depot = await (await this.depotModel.findById(id)).populate('company', 'name phone address email');
    return {depot: depot};
  }

  async update(id: string, updateDepotDto: UpdateDepotDto) {
    return await this.depotModel.findByIdAndUpdate(id, updateDepotDto);
  }

  async remove(id: string) {
    return await this.depotModel.findByIdAndRemove(id);
  }
}
