import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema ({
    name: {
        type: String,
        minlength: 3,
        maxlength: 1024,
        required: [true, 'COMPANY_NAME_IS_BLANK']
    },

    description: {
        type: String,
        minlength: 5,
        maxlength: 5000,
        required: [true, 'COMPANY_DESCRIPTION_IS_BLANK']
    },

    ITN: {  
        type: String,
        length: 10,
        required: [true, 'ITN_IS_BLANK']
    },

    admin: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },

    address: {
        type: String,
        minlength: 5,
        maxlength: 1042,
        required: [true, 'ADDRESS_IS_BLANK']
    },

    phone: {
        type: String,
        minlength: 5,
        maxlength: 20,
        required: [true, 'PHONE_IS_BLANK']
    },

    email: {
        type: String,
        minlength: 5,
        maxlength: 200,
        required: [true, 'EMAIL_IS_BLANK']
    },

    postcode: {
        type: String,
        length: 6
    }
});
