import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, MinLength, MaxLength } from 'class-validator';
import { CreateProductBarcodeDto } from './create-product-barcode.dto';

export class UpdateProductBarcodeDto extends PartialType(CreateProductBarcodeDto) {

    @IsNotEmpty()
    @IsString()
    @Length(24)
    product: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(100)
    barcode: string;

}
