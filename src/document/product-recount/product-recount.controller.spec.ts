import { Test, TestingModule } from '@nestjs/testing';
import { ProductRecountController } from './product-recount.controller';
import { ProductRecountService } from './product-recount.service';

describe('ProductRecountController', () => {
  let controller: ProductRecountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductRecountController],
      providers: [ProductRecountService],
    }).compile();

    controller = module.get<ProductRecountController>(ProductRecountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
