import { IsString, Length } from "class-validator";

export class OpenPosShiftDto {

    @IsString()
    @Length(24)
    salesman: string;

    @IsString()
    @Length(24)
    POS: string;

}