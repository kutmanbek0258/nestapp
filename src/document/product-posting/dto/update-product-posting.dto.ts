import { PartialType } from '@nestjs/swagger';
import { CreateProductPostingDto } from './create-product-posting.dto';

export class UpdateProductPostingDto extends PartialType(CreateProductPostingDto) {}
