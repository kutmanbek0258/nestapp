import { Module } from '@nestjs/common';
import { PosCheckService } from './pos-check.service';
import { PosCheckController } from './pos-check.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { POSCheckSchema } from './schemas/pos-check.schema';
import { POSCheckItemSchema } from './schemas/pos-check-item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'POSCheck', schema: POSCheckSchema },
      { name: 'POSCheckItem', schema: POSCheckItemSchema },
    ]),
  ],
  controllers: [PosCheckController],
  providers: [PosCheckService],
  exports: [PosCheckService],
})
export class PosCheckModule {}
