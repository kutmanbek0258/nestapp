import { Document } from "mongoose";

export interface Supplier extends Document{

    company: string;

    person: string;

}