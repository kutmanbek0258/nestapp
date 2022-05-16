import * as mongoose from 'mongoose';

export const POSSchema = new mongoose.Schema({

    shop: {
        type: mongoose.Types.ObjectId,
        ref: 'Shop',
        required: [true, 'SHOP_IS_BLANK']
    },

    name: {
        type: String,
        minlength: 5,
        maxlength: 1024,
        required: [true, 'NAME_IS_BLANK']
    }

})
