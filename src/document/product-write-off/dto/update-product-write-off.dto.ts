import { PartialType } from '@nestjs/swagger';
import { CreateProductWriteOffDto } from './create-product-write-off.dto';

export class UpdateProductWriteOffDto extends PartialType(CreateProductWriteOffDto) {}
