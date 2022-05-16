import { Injectable } from '@nestjs/common';
import { CreateProductMoveDto } from './dto/create-product-move.dto';
import { UpdateProductMoveDto } from './dto/update-product-move.dto';

@Injectable()
export class ProductMoveService {
  create(createProductMoveDto: CreateProductMoveDto) {
    return 'This action adds a new productMove';
  }

  findAll() {
    return `This action returns all productMove`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productMove`;
  }

  update(id: number, updateProductMoveDto: UpdateProductMoveDto) {
    return `This action updates a #${id} productMove`;
  }

  remove(id: number) {
    return `This action removes a #${id} productMove`;
  }
}
