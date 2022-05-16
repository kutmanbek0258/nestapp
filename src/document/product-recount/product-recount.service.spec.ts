import { Test, TestingModule } from '@nestjs/testing';
import { ProductRecountService } from './product-recount.service';

describe('ProductRecountService', () => {
  let service: ProductRecountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductRecountService],
    }).compile();

    service = module.get<ProductRecountService>(ProductRecountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
