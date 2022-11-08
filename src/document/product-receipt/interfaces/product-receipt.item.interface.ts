import { Document } from 'mongoose';

export interface ProductReceiptItem extends Document {
  ProductReceipt: string;

  product: string;

  quantity: number;

  price: number;

  currency: string;
}
