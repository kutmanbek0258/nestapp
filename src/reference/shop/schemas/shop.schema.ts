import * as mongoose from 'mongoose';

export const ShopSchema = new mongoose.Schema({

    company: {
        type: mongoose.Types.ObjectId,
        ref: 'Company',
        required: [true, 'COMAPNY_IS_BANK']
    },

    name: {
        type: String,
        minlength: 5,
        maxlength: 1024,
        required: [true, 'NAME_IS_BLANK']
    },

    address: {
        type: String,
        minlength: 5,
        maxlength: 1024,
        required: [true, 'ADDRESS_IS_BLANK']
    },

    phone: {
        type: String,
        minlength: 5,
        maxlength: 100,
        required: [true, 'PHONE_IS_BLANK']
    },

    email: {
        type: String,
        minlength: 5,
        maxlength: 1024,
        required: [true, 'EMAIL_IS_BLANK']
    },

    receipt_depot: {
        type: mongoose.Types.ObjectId,
        ref: 'Depot',
        required: [true, 'RESEIPT_DEPOT_ID_BLANK']
    },

    sale_depot: {
        type: mongoose.Types.ObjectId,
        ref: 'Depot',
        required: [true, 'SALE_DEPOT_IS_BLANK']
    },

    price_template: {
        type: mongoose.Types.ObjectId,
        ref: 'PriceTemplate',
        required: [true, 'PRICE_TEMPLATE_IS_BLANK']
    }

})
