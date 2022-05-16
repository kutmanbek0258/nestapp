import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductReturnFromCustomerService } from './product-return-from-customer.service';
import { CreateProductReturnFromCustomerDto } from './dto/create-product-return-from-customer.dto';
import { UpdateProductReturnFromCustomerDto } from './dto/update-product-return-from-customer.dto';

@Controller('product-return-from-customer')
export class ProductReturnFromCustomerController {
  constructor(private readonly productReturnFromCustomerService: ProductReturnFromCustomerService) {}

  @Post()
  create(@Body() createProductReturnFromCustomerDto: CreateProductReturnFromCustomerDto) {
    return this.productReturnFromCustomerService.create(createProductReturnFromCustomerDto);
  }

  @Get()
  findAll() {
    return this.productReturnFromCustomerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productReturnFromCustomerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductReturnFromCustomerDto: UpdateProductReturnFromCustomerDto) {
    return this.productReturnFromCustomerService.update(+id, updateProductReturnFromCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productReturnFromCustomerService.remove(+id);
  }
}
