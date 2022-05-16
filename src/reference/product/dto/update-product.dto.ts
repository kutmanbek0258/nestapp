import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(250)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(1024)
    description: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(100)
    group: string;

}
