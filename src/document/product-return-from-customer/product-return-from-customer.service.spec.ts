import { Test, TestingModule } from '@nestjs/testing';
import { ProductReturnFromCustomerService } from './product-return-from-customer.service';

describe('ProductReturnFromCustomerService', () => {
  let service: ProductReturnFromCustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductReturnFromCustomerService],
    }).compile();

    service = module.get<ProductReturnFromCustomerService>(ProductReturnFromCustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
