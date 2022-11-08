import { Module } from '@nestjs/common';
import { PosSaleService } from './pos-sale.service';
import { PosSaleController } from './pos-sale.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { POSSaleSchema } from './schemas/pos-sale.schema';
import { POSSaleItemSchema } from './schemas/pos-sale-item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'POSSale', schema: POSSaleSchema },
      { name: 'POSSaleItem', schema: POSSaleItemSchema },
    ]),
  ],
  exports: [PosSaleService],
  controllers: [PosSaleController],
  providers: [PosSaleService],
})
export class PosSaleModule {}
