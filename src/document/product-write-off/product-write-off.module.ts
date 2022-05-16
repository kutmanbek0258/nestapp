import { Module } from '@nestjs/common';
import { ProductWriteOffService } from './product-write-off.service';
import { ProductWriteOffController } from './product-write-off.controller';

@Module({
  controllers: [ProductWriteOffController],
  providers: [ProductWriteOffService]
})
export class ProductWriteOffModule {}
