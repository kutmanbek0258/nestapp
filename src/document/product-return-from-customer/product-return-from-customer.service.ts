import { Injectable } from '@nestjs/common';
import { CreateProductReturnFromCustomerDto } from './dto/create-product-return-from-customer.dto';
import { UpdateProductReturnFromCustomerDto } from './dto/update-product-return-from-customer.dto';

@Injectable()
export class ProductReturnFromCustomerService {
  create(createProductReturnFromCustomerDto: CreateProductReturnFromCustomerDto) {
    return 'This action adds a new productReturnFromCustomer';
  }

  findAll() {
    return `This action returns all productReturnFromCustomer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productReturnFromCustomer`;
  }

  update(id: number, updateProductReturnFromCustomerDto: UpdateProductReturnFromCustomerDto) {
    return `This action updates a #${id} productReturnFromCustomer`;
  }

  remove(id: number) {
    return `This action removes a #${id} productReturnFromCustomer`;
  }
}
