import { Document } from "mongoose";
import * as mongoose from 'mongoose';

export interface Company extends Document {
    name: string,
    description: string,
    ITN: string,
    admin?: mongoose.Types.ObjectId,
    address: string,
    phone: string,
    email: string,
    postcode?: string
}