import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductReturnToSupplierService } from './product-return-to-supplier.service';
import { CreateProductReturnToSupplierDto } from './dto/create-product-return-to-supplier.dto';
import { UpdateProductReturnToSupplierDto } from './dto/update-product-return-to-supplier.dto';

@Controller('product-return-to-supplier')
export class ProductReturnToSupplierController {
  constructor(private readonly productReturnToSupplierService: ProductReturnToSupplierService) {}

  @Post()
  create(@Body() createProductReturnToSupplierDto: CreateProductReturnToSupplierDto) {
    return this.productReturnToSupplierService.create(createProductReturnToSupplierDto);
  }

  @Get()
  findAll() {
    return this.productReturnToSupplierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productReturnToSupplierService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductReturnToSupplierDto: UpdateProductReturnToSupplierDto) {
    return this.productReturnToSupplierService.update(+id, updateProductReturnToSupplierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productReturnToSupplierService.remove(+id);
  }
}
