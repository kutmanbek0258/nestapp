import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductBarcodeDto } from './dto/create-product-barcode.dto';
import { UpdateProductBarcodeDto } from './dto/update-product-barcode.dto';
import { ProductBarcode } from './interfaces/product-barcode.interface';

@Injectable()
export class ProductBarcodeService {

  constructor(@InjectModel('ProductBarcode') private readonly productBarcodeModel: Model<ProductBarcode>){}

  async create(createProductBarcodeDto: CreateProductBarcodeDto) {
    const productBarcode = new this.productBarcodeModel(createProductBarcodeDto);
    return await productBarcode.save();
  }

  async findAll() {
    return await this.productBarcodeModel.find();
  }

  async findOne(id: string) {
    return await this.productBarcodeModel.findById(id).populate('product', 'name');
  }

  async update(id: string, updateProductBarcodeDto: UpdateProductBarcodeDto) {
    return await this.productBarcodeModel.findByIdAndUpdate(id, updateProductBarcodeDto);
  }

  async remove(id: string) {
    return await this.productBarcodeModel.findByIdAndRemove(id);
  }
}
