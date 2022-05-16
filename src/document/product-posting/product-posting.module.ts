import { Module } from '@nestjs/common';
import { ProductPostingService } from './product-posting.service';
import { ProductPostingController } from './product-posting.controller';

@Module({
  controllers: [ProductPostingController],
  providers: [ProductPostingService]
})
export class ProductPostingModule {}
