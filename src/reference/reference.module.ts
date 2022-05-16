import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { CurrencyModule } from './currency/currency.module';
import { DepotModule } from './depot/depot.module';
import { PersonModule } from './person/person.module';
import { PosModule } from './pos/pos.module';
import { PriceTemplateModule } from './price-template/price-template.module';
import { ProductBarcodeModule } from './product-barcode/product-barcode.module';
import { ProductGroupModule } from './product-group/product-group.module';
import { ProductModule } from './product/product.module';
import { ShopModule } from './shop/shop.module';
import { SupplierModule } from './supplier/supplier.module';

@Module({

  imports: [
    CompanyModule, 
    CurrencyModule, 
    DepotModule, 
    PersonModule, 
    PosModule, 
    PriceTemplateModule, 
    ProductBarcodeModule, 
    ProductGroupModule, 
    ProductModule, 
    ShopModule, 
    SupplierModule
  ]
})
export class ReferenceModule {}
