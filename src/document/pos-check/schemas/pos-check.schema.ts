import * as mongoose from 'mongoose';

export const POSCheckSchema = new mongoose.Schema({
  company: {
    type: mongoose.Types.ObjectId,
    ref: 'Company',
    required: [true, 'COMPANY_IS_BLANK'],
  },

  shop: {
    type: mongoose.Types.ObjectId,
    ref: 'Shop',
    required: [true, 'SHOP_IS_BLANK'],
  },

  POS: {
    type: mongoose.Types.ObjectId,
    ref: 'POS',
    required: [true, 'POS_IS_BLANK'],
  },

  POSShift: {
    type: mongoose.Types.ObjectId,
    ref: 'POSShift',
    required: [true, 'SHIFT_IS_BLANK'],
  },

  salesman: {
    type: mongoose.Types.ObjectId,
    ref: 'Person',
    required: [true, 'SALESMAN_IS_BLANK'],
  },

  customer: {
    type: mongoose.Types.ObjectId,
    ref: 'Person',
    required: [true, 'CUSTOMER_IS_BLANK'],
  },

  archive: {
    type: Boolean,
    required: [true, 'ARCHIVE_STATUS_IS_BLANK'],
    default: false,
  },

  created_at: {
    type: Date,
    required: [true, 'CREATED_AT_IS_BLANK'],
    default: Date.now,
  },
});
