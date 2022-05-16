import { IsNotEmpty, IsString, Length, MaxLength, MinLength } from "class-validator";

export class CreateShopDto {

    @IsNotEmpty()
    @IsString()
    @Length(24)
    company: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(1024)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(1024)
    address: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(100)
    phone: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(1024)
    email: string;

    @IsNotEmpty()
    @IsString()
    @Length(24)
    receipt_depot: string;

    @IsNotEmpty()
    @IsString()
    @Length(24)
    sale_depot: string;

    @IsNotEmpty()
    @IsString()
    @Length(24)
    price_template: string;

}
