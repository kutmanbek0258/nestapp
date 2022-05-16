import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductPostingService } from './product-posting.service';
import { CreateProductPostingDto } from './dto/create-product-posting.dto';
import { UpdateProductPostingDto } from './dto/update-product-posting.dto';

@Controller('product-posting')
export class ProductPostingController {
  constructor(private readonly productPostingService: ProductPostingService) {}

  @Post()
  create(@Body() createProductPostingDto: CreateProductPostingDto) {
    return this.productPostingService.create(createProductPostingDto);
  }

  @Get()
  findAll() {
    return this.productPostingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productPostingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductPostingDto: UpdateProductPostingDto) {
    return this.productPostingService.update(+id, updateProductPostingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productPostingService.remove(+id);
  }
}
