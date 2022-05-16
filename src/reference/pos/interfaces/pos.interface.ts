import { Document } from "mongoose";

export interface POS extends Document{
    shop: String,
    name: String
}