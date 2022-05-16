import { Module } from '@nestjs/common';
import { ProductReturnToSupplierService } from './product-return-to-supplier.service';
import { ProductReturnToSupplierController } from './product-return-to-supplier.controller';

@Module({
  controllers: [ProductReturnToSupplierController],
  providers: [ProductReturnToSupplierService]
})
export class ProductReturnToSupplierModule {}
