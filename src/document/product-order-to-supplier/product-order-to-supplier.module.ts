import { Module } from '@nestjs/common';
import { ProductOrderToSupplierService } from './product-order-to-supplier.service';
import { ProductOrderToSupplierController } from './product-order-to-supplier.controller';

@Module({
  controllers: [ProductOrderToSupplierController],
  providers: [ProductOrderToSupplierService]
})
export class ProductOrderToSupplierModule {}
