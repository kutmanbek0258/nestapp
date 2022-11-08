import { Document } from 'mongoose';

export interface ProductReceipt extends Document {
  receiver: string;

  supplier: string;

  depot: string;

  receptionist: string;

  deliver: string;

  status: string;
}
