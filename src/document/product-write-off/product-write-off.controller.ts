import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductWriteOffService } from './product-write-off.service';
import { CreateProductWriteOffDto } from './dto/create-product-write-off.dto';
import { UpdateProductWriteOffDto } from './dto/update-product-write-off.dto';

@Controller('product-write-off')
export class ProductWriteOffController {
  constructor(private readonly productWriteOffService: ProductWriteOffService) {}

  @Post()
  create(@Body() createProductWriteOffDto: CreateProductWriteOffDto) {
    return this.productWriteOffService.create(createProductWriteOffDto);
  }

  @Get()
  findAll() {
    return this.productWriteOffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productWriteOffService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductWriteOffDto: UpdateProductWriteOffDto) {
    return this.productWriteOffService.update(+id, updateProductWriteOffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productWriteOffService.remove(+id);
  }
}
