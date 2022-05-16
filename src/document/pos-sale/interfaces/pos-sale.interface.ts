import { Document } from "mongoose";

export interface POSSale extends Document{

    shop: string;

    POS: string;

    shift: string;

    slesman: string;

    comment: string;

}