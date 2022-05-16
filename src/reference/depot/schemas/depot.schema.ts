import * as mongoose from 'mongoose';

export const DepotSchema = new mongoose.Schema ({

    company: {
        type: mongoose.Types.ObjectId,
        ref: 'Company',
        required: [true, 'SHOP_IS_BLANK']
    },

    name: {
        type: String,
        minlength: 5,
        maxlength: 1024,
        required: [true, 'NAME_IS_BLANK']
    }

})
