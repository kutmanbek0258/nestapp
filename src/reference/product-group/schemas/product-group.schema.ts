import * as mongoose from 'mongoose';

export const ProductGroupSchema = new mongoose.Schema({


    name: {
        type: String,
        minlength: 5,
        maxlength: 1024,
        required: [true, 'NAME_IS_BLANK']
    },

    description: {
        type: String,
        minlength: 5,
        maxlength: 5000,
        required: [true, 'DESCRIPTION_IS_BLANK']
    }

})
