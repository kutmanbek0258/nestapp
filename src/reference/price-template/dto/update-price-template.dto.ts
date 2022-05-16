import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, MaxLength, IsJSON, IsArray } from 'class-validator';
import { CreatePriceTemplateDto } from './create-price-template.dto';

export class UpdatePriceTemplateDto extends PartialType(CreatePriceTemplateDto) {

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(1024)
    name: string;

    @IsNotEmpty()
    @IsArray()
    template: Object[];

}
