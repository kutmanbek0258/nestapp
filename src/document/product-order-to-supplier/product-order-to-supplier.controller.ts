import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductOrderToSupplierService } from './product-order-to-supplier.service';
import { CreateProductOrderToSupplierDto } from './dto/create-product-order-to-supplier.dto';
import { UpdateProductOrderToSupplierDto } from './dto/update-product-order-to-supplier.dto';

@Controller('product-order-to-supplier')
export class ProductOrderToSupplierController {
  constructor(private readonly productOrderToSupplierService: ProductOrderToSupplierService) {}

  @Post()
  create(@Body() createProductOrderToSupplierDto: CreateProductOrderToSupplierDto) {
    return this.productOrderToSupplierService.create(createProductOrderToSupplierDto);
  }

  @Get()
  findAll() {
    return this.productOrderToSupplierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productOrderToSupplierService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductOrderToSupplierDto: UpdateProductOrderToSupplierDto) {
    return this.productOrderToSupplierService.update(+id, updateProductOrderToSupplierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productOrderToSupplierService.remove(+id);
  }
}
