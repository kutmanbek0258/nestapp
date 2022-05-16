import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength, MaxLength, Length, IsNumber } from 'class-validator';
import { CreateCurrencyDto } from './create-currency.dto';

export class UpdateCurrencyDto extends PartialType(CreateCurrencyDto) {

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
