import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProductDto {

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
