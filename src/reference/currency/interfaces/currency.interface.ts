import { Document } from "mongoose";

export interface Currency extends Document {
    name: string;
    description: string;
    code: string;
    rate_of_usd: number;
}