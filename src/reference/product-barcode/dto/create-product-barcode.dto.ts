import { IsNotEmpty, IsString, Length, MaxLength, MinLength } from "class-validator";

export class CreateProductBarcodeDto {

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
