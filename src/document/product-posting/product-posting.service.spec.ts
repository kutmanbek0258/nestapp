import { Test, TestingModule } from '@nestjs/testing';
import { ProductPostingService } from './product-posting.service';

describe('ProductPostingService', () => {
  let service: ProductPostingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductPostingService],
    }).compile();

    service = module.get<ProductPostingService>(ProductPostingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
