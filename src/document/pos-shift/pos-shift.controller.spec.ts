import { Test, TestingModule } from '@nestjs/testing';
import { PosShiftController } from './pos-shift.controller';
import { PosShiftService } from './pos-shift.service';

describe('PosShiftController', () => {
  let controller: PosShiftController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PosShiftController],
      providers: [PosShiftService],
    }).compile();

    controller = module.get<PosShiftController>(PosShiftController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
