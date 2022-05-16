import * as mongoose from 'mongoose';

export const PriceTempalteSchema = new mongoose.Schema({

    name: {
        type: String,
        minlength: 5,
        maxlength: 1024,
        required: [true, 'NAME_IS_BLANK']
    },

    template: {
        type: Object,
        required: [true, 'TEMPALTE_IS_BLANK']
    }

})
