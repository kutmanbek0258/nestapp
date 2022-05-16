import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductGroupDto } from './dto/create-product-group.dto';
import { UpdateProductGroupDto } from './dto/update-product-group.dto';
import { ProductGroup } from './interfaces/product-group.interface';

@Injectable()
export class ProductGroupService {

  constructor(@InjectModel('ProductGroup') private readonly productGroupModel: Model<ProductGroup>){}

  create(createProductGroupDto: CreateProductGroupDto) {
    const productGroup = new this.productGroupModel(createProductGroupDto);
    return productGroup.save();
  }

  findAll() {
    return this.productGroupModel.find();
  }

  findOne(id: string) {
    return this.productGroupModel.findById(id);
  }

  update(id: string, updateProductGroupDto: UpdateProductGroupDto) {
    return this.productGroupModel.findByIdAndUpdate(updateProductGroupDto);
  }

  remove(id: string) {
    return this.productGroupModel.findByIdAndRemove(id);
  }
}
