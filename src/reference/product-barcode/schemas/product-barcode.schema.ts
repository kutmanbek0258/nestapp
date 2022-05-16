import * as mongoose from 'mongoose';
export const ProcductBarcodeSchema = new mongoose.Schema({

    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        reqiudes: [true, 'PRODUCT_IS_BLANK']
    },

    barcode: {
        type: String,
        minlength: 5,
        maxlength: 100,
        reuired: [true, 'BARCODE_IS_BLANK']
    }

})
