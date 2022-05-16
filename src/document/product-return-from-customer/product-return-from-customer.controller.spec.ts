import { Test, TestingModule } from '@nestjs/testing';
import { ProductReturnFromCustomerController } from './product-return-from-customer.controller';
import { ProductReturnFromCustomerService } from './product-return-from-customer.service';

describe('ProductReturnFromCustomerController', () => {
  let controller: ProductReturnFromCustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductReturnFromCustomerController],
      providers: [ProductReturnFromCustomerService],
    }).compile();

    controller = module.get<ProductReturnFromCustomerController>(ProductReturnFromCustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
