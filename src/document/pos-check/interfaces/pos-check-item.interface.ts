import { Document } from 'mongoose';

export interface POSCheckItem extends Document {
  POSCheck: string;

  product: string;

  quantity: number;

  price: number;

  currency: string;
}
