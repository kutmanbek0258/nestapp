import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateDepotDto {

    @IsString()
    @IsNotEmpty()
    company: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(1024)
    name: string;

}
