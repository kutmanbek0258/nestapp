import { Test, TestingModule } from '@nestjs/testing';
import { ProductReturnToSupplierService } from './product-return-to-supplier.service';

describe('ProductReturnToSupplierService', () => {
  let service: ProductReturnToSupplierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductReturnToSupplierService],
    }).compile();

    service = module.get<ProductReturnToSupplierService>(ProductReturnToSupplierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
