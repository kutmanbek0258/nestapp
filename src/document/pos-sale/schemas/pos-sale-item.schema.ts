import * as mongoose from 'mongoose';

export const POSSaleItemSchema = new mongoose.Schema({
  POSSale: {
    type: mongoose.Types.ObjectId,
    ref: 'POSSale',
    required: [true, 'POSSALE_IS_BLANK'],
  },

  product: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
    required: [true, 'PRODUCT_IS_BLANK'],
  },

  quantity: {
    type: Number,
    required: [true, 'QUANTITY_IS_BLANK'],
  },

  price: {
    type: Number,
    required: [true, 'PRICE_IS_BLANK'],
  },

  currency: {
    type: mongoose.Types.ObjectId,
    ref: 'Currency',
    required: [true, 'CURRENCY_IS_BLANK'],
  },
});
