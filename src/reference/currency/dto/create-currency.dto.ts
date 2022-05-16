import { IsNotEmpty, IsNumber, IsString, Length, MaxLength, MinLength } from "class-validator";

export class CreateCurrencyDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(500)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(5000)
    description: string;

    @IsString()
    @IsNotEmpty()
    @Length(3)
    code: string;

    @IsNumber()
    @IsNotEmpty()
    rate_of_usd: number;
}
