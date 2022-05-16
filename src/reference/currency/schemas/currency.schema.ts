import * as mongoose from 'mongoose';

export const CurrencySchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 500,
        required: [true, 'NAME_IS_BLANK']
    },
    description: {
        type: String,
        minlength: 5,
        maxlength: 5000,
        required: false
    },
    code: {
        type: String,
        length: 3,
        required: [true, 'CODE_IS_BLANK']
    },
    rate_of_usd: {
        type: Number,
        required: [true, "RATE_IS_BLANK"]
    }
})
