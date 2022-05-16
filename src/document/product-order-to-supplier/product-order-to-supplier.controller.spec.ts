import { Test, TestingModule } from '@nestjs/testing';
import { ProductOrderToSupplierController } from './product-order-to-supplier.controller';
import { ProductOrderToSupplierService } from './product-order-to-supplier.service';

describe('ProductOrderToSupplierController', () => {
  let controller: ProductOrderToSupplierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductOrderToSupplierController],
      providers: [ProductOrderToSupplierService],
    }).compile();

    controller = module.get<ProductOrderToSupplierController>(ProductOrderToSupplierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
