import { Document, Types } from "mongoose";

export interface Shop extends Document{

    company: string;

    name: string;

    address: string;

    phone: string;

    email: string;

    receipt_depot: string;

    sale_depot: string;

    price_template: string;

}