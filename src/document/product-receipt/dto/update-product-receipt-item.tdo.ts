import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, IsNumber } from 'class-validator';
import { AddProductReceiptItemDto } from './add-product-receipt-item.dto';

export class UpdateProductReceiptItemDto extends PartialType(
  AddProductReceiptItemDto,
) {
  @IsNotEmpty()
  @IsString()
  @Length(24)
  POSCheck: string;

  @IsNotEmpty()
  @IsString()
  @Length(24)
  product: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  @Length(24)
  currency: string;
}
