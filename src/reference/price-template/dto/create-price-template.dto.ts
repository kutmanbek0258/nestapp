import { IsArray, IsJSON, IsNotEmpty, IsObject, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePriceTemplateDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(1024)
    name: string;

    @IsNotEmpty()
    @IsArray()
    template: Object[];

}
