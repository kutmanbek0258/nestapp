import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateProductReceiptDto {
  @IsNotEmpty()
  @IsString()
  @Length(24)
  receiver: string;

  @IsNotEmpty()
  @IsString()
  @Length(24)
  supplier: string;

  @IsNotEmpty()
  @IsString()
  @Length(24)
  depot: string;

  @IsNotEmpty()
  @IsString()
  @Length(24)
  receptionist: string;

  @IsNotEmpty()
  @IsString()
  @Length(24)
  deliver: string;
}
