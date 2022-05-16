import { Test, TestingModule } from '@nestjs/testing';
import { ProductWriteOffService } from './product-write-off.service';

describe('ProductWriteOffService', () => {
  let service: ProductWriteOffService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductWriteOffService],
    }).compile();

    service = module.get<ProductWriteOffService>(ProductWriteOffService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
