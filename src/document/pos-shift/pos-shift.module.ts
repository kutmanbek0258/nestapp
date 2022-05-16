import { Module } from '@nestjs/common';
import { PosShiftService } from './pos-shift.service';
import { PosShiftController } from './pos-shift.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { POSShiftSchema } from './schemas/pos-shift.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'POSShift', schema: POSShiftSchema}])],
  controllers: [PosShiftController],
  providers: [PosShiftService]
})
export class PosShiftModule {}
