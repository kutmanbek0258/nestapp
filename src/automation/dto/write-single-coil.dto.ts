import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class WriteSingleCoilDto {

  @IsNumber()
  @IsNotEmpty()
  flagNumber: number;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

}
