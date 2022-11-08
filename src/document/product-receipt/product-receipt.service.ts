import { Injectable } from '@nestjs/common';
import { CreateProductReceiptDto } from './dto/create-product-receipt.dto';
import { UpdateProductReceiptDto } from './dto/update-product-receipt.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductReceipt } from './interfaces/product-receipt.interface';
import { ProductReceiptItem } from './interfaces/product-receipt.item.interface';

@Injectable()
export class ProductReceiptService {
  constructor(
    @InjectModel('ProductReceipt')
    private readonly productReceiptModel: Model<ProductReceipt>,
    @InjectModel('ProductReceiptItem')
    private readonly productReceiptItemModel: Model<ProductReceiptItem>,
  ) {}

  async create(createProductReceiptDto: CreateProductReceiptDto) {
    const newProductReceipt = new this.productReceiptModel(
      createProductReceiptDto,
    );
    return await newProductReceipt.save;
  }

  findAll() {
    return `This action returns all productReceipt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productReceipt`;
  }

  update(id: number, updateProductReceiptDto: UpdateProductReceiptDto) {
    return `This action updates a #${id} productReceipt`;
  }

  remove(id: number) {
    return `This action removes a #${id} productReceipt`;
  }
}
