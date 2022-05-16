import { Test, TestingModule } from '@nestjs/testing';
import { ProductMoveService } from './product-move.service';

describe('ProductMoveService', () => {
  let service: ProductMoveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductMoveService],
    }).compile();

    service = module.get<ProductMoveService>(ProductMoveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
