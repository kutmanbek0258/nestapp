import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, IsNumber } from 'class-validator';
import { AddPosCheckItemDto } from './add-pos-check-item.dto';

export class UpdatePosCheckItemDto extends PartialType(AddPosCheckItemDto) {

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