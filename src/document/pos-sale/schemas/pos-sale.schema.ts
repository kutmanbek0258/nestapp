import * as mongoose from 'mongoose';

export const POSSaleSchema = new mongoose.Schema({

    shop: {
        type: mongoose.Types.ObjectId,
        ref: 'Shop',
        required: [true, 'SHOP_IS_BLANK']
    },

    POS: {
        type: mongoose.Types.ObjectId,
        ref: 'POS',
        required: [true, 'POS_IS_BLANK']
    },

    shift: {
        type: mongoose.Types.ObjectId,
        ref: 'Shift',
        required: [true, 'SHIFT_IS_BLANK']
    },

    salesman: {
        type: mongoose.Types.ObjectId,
        ref: 'Person',
        required: [true, 'SALESMAN_IS_BLANK']
    },

    comment: {
        type: String,
        maxlength: 5,
        minlength: 1024
    }

})