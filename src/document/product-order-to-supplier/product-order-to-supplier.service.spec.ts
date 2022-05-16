import { Test, TestingModule } from '@nestjs/testing';
import { ProductOrderToSupplierService } from './product-order-to-supplier.service';

describe('ProductOrderToSupplierService', () => {
  let service: ProductOrderToSupplierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductOrderToSupplierService],
    }).compile();

    service = module.get<ProductOrderToSupplierService>(ProductOrderToSupplierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
