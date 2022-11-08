import { PartialType } from '@nestjs/swagger';
import { CreateProductReceiptDto } from './create-product-receipt.dto';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateProductReceiptDto extends PartialType(
  CreateProductReceiptDto,
) {
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
