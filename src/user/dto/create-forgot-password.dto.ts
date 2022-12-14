import { IsNotEmpty, MinLength, MaxLength, IsEmail, IsString } from 'class-validator';

export class CreateForgotPasswordDto {
    
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    @IsEmail()
    readonly email: string;

  }
