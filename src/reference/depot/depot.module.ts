import { Module } from '@nestjs/common';
import { DepotService } from './depot.service';
import { DepotController } from './depot.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DepotSchema } from './schemas/depot.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Depot', schema: DepotSchema}])],
  controllers: [DepotController],
  providers: [DepotService]
})
export class DepotModule {}
