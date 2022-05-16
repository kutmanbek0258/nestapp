import { Module } from '@nestjs/common';
import { PosCheckModule } from './pos-check/pos-check.module';
import { PosSaleModule } from './pos-sale/pos-sale.module';
import { PosShiftModule } from './pos-shift/pos-shift.module';
import { ProductMoveModule } from './product-move/product-move.module';
import { ProductOrderToSupplierModule } from './product-order-to-supplier/product-order-to-supplier.module';
import { ProductPostingModule } from './product-posting/product-posting.module';
import { ProductPriceModule } from './product-price/product-price.module';
import { ProductReceiptModule } from './product-receipt/product-receipt.module';
import { ProductRecountModule } from './product-recount/product-recount.module';
import { ProductReturnFromCustomerModule } from './product-return-from-customer/product-return-from-customer.module';
import { ProductReturnToSupplierModule } from './product-return-to-supplier/product-return-to-supplier.module';
import { ProductWriteOffModule } from './product-write-off/product-write-off.module';

@Module({

  imports: [
    PosCheckModule, 
    // PosSaleModule, 
    PosShiftModule, 
    // ProductMoveModule, 
    // ProductOrderToSupplierModule, 
    // ProductPostingModule, 
    // ProductPriceModule, 
    // ProductReceiptModule, 
    // ProductRecountModule, 
    // ProductReturnFromCustomerModule, 
    // ProductReturnToSupplierModule, 
    // ProductWriteOffModule
  ]
})
export class DocumentModule {}
