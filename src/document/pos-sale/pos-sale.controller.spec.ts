import { Test, TestingModule } from '@nestjs/testing';
import { PosSaleController } from './pos-sale.controller';
import { PosSaleService } from './pos-sale.service';

describe('PosSaleController', () => {
  let controller: PosSaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PosSaleController],
      providers: [PosSaleService],
    }).compile();

    controller = module.get<PosSaleController>(PosSaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
