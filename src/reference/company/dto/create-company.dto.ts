import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsUUID, Length, MaxLength, MinLength } from "class-validator";

export class CreateCompanyDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(1024)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(5000)
    description: string;

    @IsString()
    @IsNotEmpty()
    @Length(10)
    ITN: string;

    admin?: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(1024)
    address: string;

    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber()
    phone: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    postcode?: string;
}
