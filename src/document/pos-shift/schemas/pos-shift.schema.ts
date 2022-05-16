import * as mongoose from 'mongoose';

export const POSShiftSchema = new mongoose.Schema({

    open_at: {
        type: Date,
        default: Date.now,
        required: [true, 'OPEN_DATE_IS_BLANK']
    },

    close_at: {
        type: Date
    },

    open: {
        type: Boolean,
        default: true,
        required: [true, 'OPEN_STATUS_IS_BLANK']
    },

    salesman: {
        type: mongoose.Types.ObjectId,
        ref: 'Person',
        required: [true, 'SALESMAN_IS_BLANK']
    },

    POS: {
        type: mongoose.Types.ObjectId,
        ref: 'POS',
        required: [true, 'POS_IS_BLANK']
    }


})
