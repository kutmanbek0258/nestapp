import { Document } from 'mongoose';

export interface POSShift extends Document {
  open_at: Date;
  close_at: Date;
  open: boolean;
  salesman: string;
  POS: string;
}
