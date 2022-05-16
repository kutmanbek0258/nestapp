import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';
import { CreatePOSDto } from './create-pos.dto';

export class UpdatePOSDto extends PartialType(CreatePOSDto) {

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(60)
    shop: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(1024)
    name: string;
    
}
