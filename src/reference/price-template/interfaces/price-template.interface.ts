import { Document } from "mongoose";

export interface PriceTemplate extends Document{

    name: string;

    template: JSON;

}