import { Document } from "mongoose";

export interface ProductBarcode extends Document{

    product: String;

    barcode: String;

}