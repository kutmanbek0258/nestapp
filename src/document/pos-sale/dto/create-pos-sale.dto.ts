import {
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePosSaleDto {
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
  shift: string;

  @IsNotEmpty()
  @IsString()
  @Length(24)
  salesman: string;

  comment: string;
}
