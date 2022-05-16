import { Document } from 'mongoose';

export interface Depot extends Document {
    company: string;
    name: string;
}