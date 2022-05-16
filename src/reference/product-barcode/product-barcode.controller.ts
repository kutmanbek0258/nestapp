import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductBarcodeService } from './product-barcode.service';
import { CreateProductBarcodeDto } from './dto/create-product-barcode.dto';
import { UpdateProductBarcodeDto } from './dto/update-product-barcode.dto';

@Controller('product-barcode')
export class ProductBarcodeController {
  constructor(private readonly productBarcodeService: ProductBarcodeService) {}

  @Post()
  create(@Body() createProductBarcodeDto: CreateProductBarcodeDto) {
    return this.productBarcodeService.create(createProductBarcodeDto);
  }

  @Get()
  findAll() {
    return this.productBarcodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productBarcodeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductBarcodeDto: UpdateProductBarcodeDto) {
    return this.productBarcodeService.update(id, updateProductBarcodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productBarcodeService.remove(id);
  }
}
