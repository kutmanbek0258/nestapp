import * as mongoose from 'mongoose';

export const SupplierSchema = new mongoose.Schema({

    company: {
        type: mongoose.Types.ObjectId,
        ref: 'Company',
        required: [true, 'COMPANY_IS_BLANK']
    },

    person: {
        type: mongoose.Types.ObjectId,
        ref: 'Person',
        reiured: [true, 'PERSON_IS_BLANK']
    }

})
