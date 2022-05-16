import { Test, TestingModule } from '@nestjs/testing';
import { ProductMoveController } from './product-move.controller';
import { ProductMoveService } from './product-move.service';

describe('ProductMoveController', () => {
  let controller: ProductMoveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductMoveController],
      providers: [ProductMoveService],
    }).compile();

    controller = module.get<ProductMoveController>(ProductMoveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
