import { Document } from "mongoose";

export interface ProductGroup extends Document{

    name: string;

    description: string;

}