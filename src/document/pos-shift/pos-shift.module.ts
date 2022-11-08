import { Module } from '@nestjs/common';
import { PosShiftService } from './pos-shift.service';
import { PosShiftController } from './pos-shift.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { POSShiftSchema } from './schemas/pos-shift.schema';
import { PosSaleModule } from '../pos-sale/pos-sale.module';
import { PosCheckModule } from '../pos-check/pos-check.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'POSShift', schema: POSShiftSchema }]),
    PosSaleModule,
    PosCheckModule,
  ],
  controllers: [PosShiftController],
  providers: [PosShiftService],
})
export class PosShiftModule {}
