import { Module } from '@nestjs/common';
import { ProductReceiptService } from './product-receipt.service';
import { ProductReceiptController } from './product-receipt.controller';

@Module({
  controllers: [ProductReceiptController],
  providers: [ProductReceiptService]
})
export class ProductReceiptModule {}
