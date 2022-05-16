import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, MaxLength, IsPhoneNumber, IsEmail } from 'class-validator';
import { CreatePersonDto } from './create-person.dto';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(150)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(150)
    surname: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    phone: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(1024)
    address: string;

}
