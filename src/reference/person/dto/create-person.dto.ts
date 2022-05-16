import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePersonDto {

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
