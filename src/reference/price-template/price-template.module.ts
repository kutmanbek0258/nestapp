import { Module } from '@nestjs/common';
import { PriceTemplateService } from './price-template.service';
import { PriceTemplateController } from './price-template.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PriceTempalteSchema } from './schemas/price-template.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'PriceTemplate', schema: PriceTempalteSchema}])],
  controllers: [PriceTemplateController],
  providers: [PriceTemplateService]
})
export class PriceTemplateModule {}
