import { PartialType } from '@nestjs/swagger';
import { CreateProductReturnToSupplierDto } from './create-product-return-to-supplier.dto';

export class UpdateProductReturnToSupplierDto extends PartialType(CreateProductReturnToSupplierDto) {}
