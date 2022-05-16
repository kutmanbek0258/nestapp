import { Module } from '@nestjs/common';
import { ProductRecountService } from './product-recount.service';
import { ProductRecountController } from './product-recount.controller';

@Module({
  controllers: [ProductRecountController],
  providers: [ProductRecountService]
})
export class ProductRecountModule {}
