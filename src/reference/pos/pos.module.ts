import { Module } from '@nestjs/common';
import { PosService } from './pos.service';
import { PosController } from './pos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { POSSchema } from './schemas/pos.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'POS', schema: POSSchema}])],
  controllers: [PosController],
  providers: [PosService]
})
export class PosModule {}
