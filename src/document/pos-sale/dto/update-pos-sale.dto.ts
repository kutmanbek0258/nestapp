import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, MinLength, MaxLength } from 'class-validator';
import { CreatePosSaleDto } from './create-pos-sale.dto';

export class UpdatePosSaleDto extends PartialType(CreatePosSaleDto) {

    @IsNotEmpty()
    @IsString()
    @Length(24)
    shop: string;

    @IsNotEmpty()
    @IsString()
    @Length(24)
    POS: string;

    @IsNotEmpty()
    @IsString()
    @Length(24)
    shit: string;

    @IsNotEmpty()
    @IsString()
    @Length(24)
    salesman: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(2000)
    comment: string;

}
