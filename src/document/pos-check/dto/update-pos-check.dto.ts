import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { CreatePosCheckDto } from './create-pos-check.dto';

export class UpdatePosCheckDto extends PartialType(CreatePosCheckDto) {

    @IsNotEmpty()
    @IsString()
    @Length(24)
    company: string;

    @IsNotEmpty()
    @IsString()
    @Length(24)
    shop: string;

    @IsNotEmpty()
    @IsString()
    @Length(24)
    pos: string;

    @IsNotEmpty()
    @IsString()
    @Length(24)
    shift: string;

    @IsNotEmpty()
    @IsString()
    @Length(24)
    salesman: string;

    @IsNotEmpty()
    @IsString()
    @Length(24)
    customer: string;

}
