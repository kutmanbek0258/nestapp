import { Injectable } from '@nestjs/common';
import { CreateProductRecountDto } from './dto/create-product-recount.dto';
import { UpdateProductRecountDto } from './dto/update-product-recount.dto';

@Injectable()
export class ProductRecountService {
  create(createProductRecountDto: CreateProductRecountDto) {
    return 'This action adds a new productRecount';
  }

  findAll() {
    return `This action returns all productRecount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productRecount`;
  }

  update(id: number, updateProductRecountDto: UpdateProductRecountDto) {
    return `This action updates a #${id} productRecount`;
  }

  remove(id: number) {
    return `This action removes a #${id} productRecount`;
  }
}
