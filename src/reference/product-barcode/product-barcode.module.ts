import { Module } from '@nestjs/common';
import { ProductBarcodeService } from './product-barcode.service';
import { ProductBarcodeController } from './product-barcode.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProcductBarcodeSchema } from './schemas/product-barcode.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'ProductBarcode', schema: ProcductBarcodeSchema}])],
  controllers: [ProductBarcodeController],
  providers: [ProductBarcodeService]
})
export class ProductBarcodeModule {}
