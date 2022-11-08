import { Module } from '@nestjs/common';
import { ProductReceiptService } from './product-receipt.service';
import { ProductReceiptController } from './product-receipt.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductReceiptSchema } from './schemas/product-receipt.schema';
import { ProductReceiptItemSchema } from './schemas/product-receipt-item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ProductReceipt', schema: ProductReceiptSchema },
      { name: 'ProductReceiptItem', schema: ProductReceiptItemSchema },
    ]),
  ],
  controllers: [ProductReceiptController],
  providers: [ProductReceiptService],
})
export class ProductReceiptModule {}
