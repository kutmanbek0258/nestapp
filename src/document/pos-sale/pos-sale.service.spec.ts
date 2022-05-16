import { Test, TestingModule } from '@nestjs/testing';
import { PosSaleService } from './pos-sale.service';

describe('PosSaleService', () => {
  let service: PosSaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosSaleService],
    }).compile();

    service = module.get<PosSaleService>(PosSaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
