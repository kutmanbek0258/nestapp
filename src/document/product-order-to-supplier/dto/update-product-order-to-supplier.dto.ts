import { PartialType } from '@nestjs/swagger';
import { CreateProductOrderToSupplierDto } from './create-product-order-to-supplier.dto';

export class UpdateProductOrderToSupplierDto extends PartialType(CreateProductOrderToSupplierDto) {}
