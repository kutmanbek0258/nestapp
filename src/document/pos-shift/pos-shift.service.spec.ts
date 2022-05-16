import { Test, TestingModule } from '@nestjs/testing';
import { PosShiftService } from './pos-shift.service';

describe('PosShiftService', () => {
  let service: PosShiftService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosShiftService],
    }).compile();

    service = module.get<PosShiftService>(PosShiftService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
