import { Module } from '@nestjs/common';
import { ProductPriceService } from './product-price.service';
import { ProductPriceController } from './product-price.controller';

@Module({
  controllers: [ProductPriceController],
  providers: [ProductPriceService]
})
export class ProductPriceModule {}
