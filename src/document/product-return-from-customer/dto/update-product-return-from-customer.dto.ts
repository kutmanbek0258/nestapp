import { PartialType } from '@nestjs/swagger';
import { CreateProductReturnFromCustomerDto } from './create-product-return-from-customer.dto';

export class UpdateProductReturnFromCustomerDto extends PartialType(CreateProductReturnFromCustomerDto) {}
