import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class AddPosCheckItemDto {

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