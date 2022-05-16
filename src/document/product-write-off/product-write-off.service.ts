import { Injectable } from '@nestjs/common';
import { CreateProductWriteOffDto } from './dto/create-product-write-off.dto';
import { UpdateProductWriteOffDto } from './dto/update-product-write-off.dto';

@Injectable()
export class ProductWriteOffService {
  create(createProductWriteOffDto: CreateProductWriteOffDto) {
    return 'This action adds a new productWriteOff';
  }

  findAll() {
    return `This action returns all productWriteOff`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productWriteOff`;
  }

  update(id: number, updateProductWriteOffDto: UpdateProductWriteOffDto) {
    return `This action updates a #${id} productWriteOff`;
  }

  remove(id: number) {
    return `This action removes a #${id} productWriteOff`;
  }
}
