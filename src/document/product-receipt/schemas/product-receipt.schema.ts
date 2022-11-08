import * as mongoose from 'mongoose';

export const ProductReceiptSchema = new mongoose.Schema({
  receiver: {
    type: mongoose.Types.ObjectId,
    ref: 'Company',
    required: [true, 'RECEIVER_IS_BLANK'],
  },

  supplier: {
    type: mongoose.Types.ObjectId,
    ref: 'Company',
    required: [true, 'SUPPLIER_IS_BLANK'],
  },

  depot: {
    type: mongoose.Types.ObjectId,
    ref: 'Depot',
    required: [true, 'DEPOT_IS_BLANK'],
  },

  receptionist: {
    type: mongoose.Types.ObjectId,
    ref: 'Person',
    required: [true, 'RECEPTIONIST_IS_BLANK'],
  },

  deliver: {
    type: mongoose.Types.ObjectId,
    ref: 'Person',
    required: [true, 'DELIVER_IS_BLANK'],
  },

  status: {
    type: String,
    default: 'Creating',
    required: [true, 'STATUS_IS_BLANK'],
  },
});
