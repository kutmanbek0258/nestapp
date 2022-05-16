import { PartialType } from '@nestjs/swagger';
import { CreateProductMoveDto } from './create-product-move.dto';

export class UpdateProductMoveDto extends PartialType(CreateProductMoveDto) {}
