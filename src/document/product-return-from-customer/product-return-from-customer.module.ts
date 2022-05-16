import { Module } from '@nestjs/common';
import { ProductReturnFromCustomerService } from './product-return-from-customer.service';
import { ProductReturnFromCustomerController } from './product-return-from-customer.controller';

@Module({
  controllers: [ProductReturnFromCustomerController],
  providers: [ProductReturnFromCustomerService]
})
export class ProductReturnFromCustomerModule {}
