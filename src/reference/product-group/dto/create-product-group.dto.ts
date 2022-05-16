import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProductGroupDto {

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
