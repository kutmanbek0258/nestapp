import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductMoveService } from './product-move.service';
import { CreateProductMoveDto } from './dto/create-product-move.dto';
import { UpdateProductMoveDto } from './dto/update-product-move.dto';

@Controller('product-move')
export class ProductMoveController {
  constructor(private readonly productMoveService: ProductMoveService) {}

  @Post()
  create(@Body() createProductMoveDto: CreateProductMoveDto) {
    return this.productMoveService.create(createProductMoveDto);
  }

  @Get()
  findAll() {
    return this.productMoveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productMoveService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductMoveDto: UpdateProductMoveDto) {
    return this.productMoveService.update(+id, updateProductMoveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productMoveService.remove(+id);
  }
}
