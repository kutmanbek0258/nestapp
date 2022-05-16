import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateSupplierDto {

    @IsNotEmpty()
    @IsString()
    @Length(24)
    company: string;

    @IsNotEmpty()
    @IsString()
    @Length(24)
    person: string;

}
