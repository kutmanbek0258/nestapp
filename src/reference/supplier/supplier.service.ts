import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from './interfaces/supplier.interface';

@Injectable()
export class SupplierService {

  constructor(@InjectModel('Supplier') private readonly supplierModel: Model<Supplier>){}

  async create(createSupplierDto: CreateSupplierDto) {
    const supplier = new this.supplierModel(createSupplierDto)
    return await supplier.save();
  }

  async findAll() {
    return await this.supplierModel.find();
  }

  async findOne(id: string) {
    return await this.supplierModel.findById(id)
      .populate('company', 'name')
      .populate('person', 'name surname');
  }

  async update(id: string, updateSupplierDto: UpdateSupplierDto) {
    return await this.supplierModel.findByIdAndUpdate(id, updateSupplierDto);
  }

  async remove(id: string) {
    return await this.supplierModel.findByIdAndRemove(id);
  }
}
