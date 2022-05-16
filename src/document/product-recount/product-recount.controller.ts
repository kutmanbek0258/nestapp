import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductRecountService } from './product-recount.service';
import { CreateProductRecountDto } from './dto/create-product-recount.dto';
import { UpdateProductRecountDto } from './dto/update-product-recount.dto';

@Controller('product-recount')
export class ProductRecountController {
  constructor(private readonly productRecountService: ProductRecountService) {}

  @Post()
  create(@Body() createProductRecountDto: CreateProductRecountDto) {
    return this.productRecountService.create(createProductRecountDto);
  }

  @Get()
  findAll() {
    return this.productRecountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productRecountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductRecountDto: UpdateProductRecountDto) {
    return this.productRecountService.update(+id, updateProductRecountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productRecountService.remove(+id);
  }
}
