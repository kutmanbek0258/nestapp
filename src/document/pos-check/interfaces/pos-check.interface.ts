import { Document } from 'mongoose';

export interface POSCheck extends Document {
  company: string;

  shop: string;

  POS: string;

  shift: string;

  salesman: string;

  customer: string;

  archive: boolean;
}
