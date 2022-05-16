import { PartialType } from '@nestjs/swagger';
import { CreatePosSaleDto } from './create-pos-sale.dto';

export class UpdatePosSaleDto extends PartialType(CreatePosSaleDto) {}
