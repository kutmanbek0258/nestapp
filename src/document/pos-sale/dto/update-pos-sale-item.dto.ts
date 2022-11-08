import { IsNotEmpty, IsString, Length, IsNumber } from "class-validator";

export class UpdatePosSaleItemDto{

    @IsNotEmpty()
    @IsString()
    @Length(24)
    POSSale: string;

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