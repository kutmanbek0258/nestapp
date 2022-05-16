import { Test, TestingModule } from '@nestjs/testing';
import { ProductWriteOffController } from './product-write-off.controller';
import { ProductWriteOffService } from './product-write-off.service';

describe('ProductWriteOffController', () => {
  let controller: ProductWriteOffController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductWriteOffController],
      providers: [ProductWriteOffService],
    }).compile();

    controller = module.get<ProductWriteOffController>(ProductWriteOffController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
