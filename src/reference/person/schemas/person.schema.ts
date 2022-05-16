import * as mongoose from 'mongoose';

export const PersonSchema = new mongoose.Schema({

    name: {
        type: String,
        minlength: 5,
        maxlength: 150
    },

    surname: {
        type: String,
        minlength: 5,
        maxlength: 150
    },

    phone: {
        type: String,
        minlength: 5,
        maxlength: 20
    },

    email: {
        type: String,
        minlength: 5,
        maxlength: 150
    },

    address: {
        type: String,
        minlength: 5,
        maxlength: 1024
    }

})
