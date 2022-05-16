import { Test, TestingModule } from '@nestjs/testing';
import { ProductPostingController } from './product-posting.controller';
import { ProductPostingService } from './product-posting.service';

describe('ProductPostingController', () => {
  let controller: ProductPostingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductPostingController],
      providers: [ProductPostingService],
    }).compile();

    controller = module.get<ProductPostingController>(ProductPostingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
