import { Injectable } from '@nestjs/common';
import { CreateProductPostingDto } from './dto/create-product-posting.dto';
import { UpdateProductPostingDto } from './dto/update-product-posting.dto';

@Injectable()
export class ProductPostingService {
  create(createProductPostingDto: CreateProductPostingDto) {
    return 'This action adds a new productPosting';
  }

  findAll() {
    return `This action returns all productPosting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productPosting`;
  }

  update(id: number, updateProductPostingDto: UpdateProductPostingDto) {
    return `This action updates a #${id} productPosting`;
  }

  remove(id: number) {
    return `This action removes a #${id} productPosting`;
  }
}
