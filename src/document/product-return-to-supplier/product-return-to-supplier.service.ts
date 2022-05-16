import { Injectable } from '@nestjs/common';
import { CreateProductReturnToSupplierDto } from './dto/create-product-return-to-supplier.dto';
import { UpdateProductReturnToSupplierDto } from './dto/update-product-return-to-supplier.dto';

@Injectable()
export class ProductReturnToSupplierService {
  create(createProductReturnToSupplierDto: CreateProductReturnToSupplierDto) {
    return 'This action adds a new productReturnToSupplier';
  }

  findAll() {
    return `This action returns all productReturnToSupplier`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productReturnToSupplier`;
  }

  update(id: number, updateProductReturnToSupplierDto: UpdateProductReturnToSupplierDto) {
    return `This action updates a #${id} productReturnToSupplier`;
  }

  remove(id: number) {
    return `This action removes a #${id} productReturnToSupplier`;
  }
}
