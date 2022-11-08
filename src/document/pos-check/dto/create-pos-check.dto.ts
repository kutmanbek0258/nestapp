import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreatePosCheckDto {
  @IsNotEmpty()
  @IsString()
  @Length(24)
  company: string;

  @IsNotEmpty()
  @IsString()
  @Length(24)
  shop: string;

  @IsNotEmpty()
  @IsString()
  @Length(24)
  POS: string;

  @IsNotEmpty()
  @IsString()
  @Length(24)
  POSShift: string;

  @IsNotEmpty()
  @IsString()
  @Length(24)
  salesman: string;

  @IsNotEmpty()
  @IsString()
  @Length(24)
  customer: string;
}
