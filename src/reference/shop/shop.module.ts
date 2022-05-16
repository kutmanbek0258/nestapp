import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopSchema } from './schemas/shop.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Shop', schema: ShopSchema}])],
  controllers: [ShopController],
  providers: [ShopService]
})
export class ShopModule {}
