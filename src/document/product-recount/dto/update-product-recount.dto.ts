import { PartialType } from '@nestjs/swagger';
import { CreateProductRecountDto } from './create-product-recount.dto';

export class UpdateProductRecountDto extends PartialType(CreateProductRecountDto) {}
