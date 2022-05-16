import { Document } from "mongoose";

export interface Person extends Document {

    name: String,

    surname: String,

    phone: String,

    email: String,

    address: String

}