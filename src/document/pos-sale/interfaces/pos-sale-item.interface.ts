import { Document } from "mongoose";

export interface POSSaleItem extends Document{

    POSSale: string;

    product: string;

    quantity: number;

    price: number;

    currency: string;

}