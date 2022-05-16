import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';
import { CreateProductGroupDto } from './create-product-group.dto';

export class UpdateProductGroupDto extends PartialType(CreateProductGroupDto) {

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(1024)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(5000)
    description: string;

}
