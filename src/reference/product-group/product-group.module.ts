import { Module } from '@nestjs/common';
import { ProductGroupService } from './product-group.service';
import { ProductGroupController } from './product-group.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductGroupSchema } from './schemas/product-group.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'ProductGroup', schema: ProductGroupSchema}])],
  controllers: [ProductGroupController],
  providers: [ProductGroupService]
})
export class ProductGroupModule {}
