import { IsNotEmpty, IsString, maxLength, MaxLength, MinLength } from "class-validator";

export class CreatePOSDto {

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
