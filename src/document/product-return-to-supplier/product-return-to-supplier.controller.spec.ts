import { Test, TestingModule } from '@nestjs/testing';
import { ProductReturnToSupplierController } from './product-return-to-supplier.controller';
import { ProductReturnToSupplierService } from './product-return-to-supplier.service';

describe('ProductReturnToSupplierController', () => {
  let controller: ProductReturnToSupplierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductReturnToSupplierController],
      providers: [ProductReturnToSupplierService],
    }).compile();

    controller = module.get<ProductReturnToSupplierController>(ProductReturnToSupplierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
