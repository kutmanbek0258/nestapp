import { PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { CreateDepotDto } from './create-depot.dto';

export class UpdateDepotDto extends PartialType(CreateDepotDto) {

    @IsString()
    @IsNotEmpty()
    company: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(1024)
    name: string;

}
