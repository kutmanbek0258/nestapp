import { Injectable } from '@nestjs/common';
import { CreateProductOrderToSupplierDto } from './dto/create-product-order-to-supplier.dto';
import { UpdateProductOrderToSupplierDto } from './dto/update-product-order-to-supplier.dto';

@Injectable()
export class ProductOrderToSupplierService {
  create(createProductOrderToSupplierDto: CreateProductOrderToSupplierDto) {
    return 'This action adds a new productOrderToSupplier';
  }

  findAll() {
    return `This action returns all productOrderToSupplier`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productOrderToSupplier`;
  }

  update(id: number, updateProductOrderToSupplierDto: UpdateProductOrderToSupplierDto) {
    return `This action updates a #${id} productOrderToSupplier`;
  }

  remove(id: number) {
    return `This action removes a #${id} productOrderToSupplier`;
  }
}
