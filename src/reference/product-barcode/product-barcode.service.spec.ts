import { Test, TestingModule } from '@nestjs/testing';
import { ProductBarcodeService } from './product-barcode.service';

describe('ProductBarcodeService', () => {
  let service: ProductBarcodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductBarcodeService],
    }).compile();

    service = module.get<ProductBarcodeService>(ProductBarcodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
