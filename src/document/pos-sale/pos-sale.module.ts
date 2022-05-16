import { Module } from '@nestjs/common';
import { PosSaleService } from './pos-sale.service';
import { PosSaleController } from './pos-sale.controller';

@Module({
  controllers: [PosSaleController],
  providers: [PosSaleService]
})
export class PosSaleModule {}
