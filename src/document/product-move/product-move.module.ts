import { Module } from '@nestjs/common';
import { ProductMoveService } from './product-move.service';
import { ProductMoveController } from './product-move.controller';

@Module({
  controllers: [ProductMoveController],
  providers: [ProductMoveService]
})
export class ProductMoveModule {}
