import { Test, TestingModule } from '@nestjs/testing';
import { ProductBarcodeController } from './product-barcode.controller';
import { ProductBarcodeService } from './product-barcode.service';

describe('ProductBarcodeController', () => {
  let controller: ProductBarcodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductBarcodeController],
      providers: [ProductBarcodeService],
    }).compile();

    controller = module.get<ProductBarcodeController>(ProductBarcodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
