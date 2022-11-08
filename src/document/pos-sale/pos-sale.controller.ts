import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PosSaleService } from './pos-sale.service';
import { CreatePosSaleDto } from './dto/create-pos-sale.dto';
import { UpdatePosSaleDto } from './dto/update-pos-sale.dto';
import { AddPosSaleItemDto } from './dto/add-pos-sale-item.dto';
import { UpdatePosSaleItemDto } from './dto/update-pos-sale-item.dto';

@Controller('pos-sale')
export class PosSaleController {
  constructor(private readonly posSaleService: PosSaleService) {}

  @Post()
  create(@Body() createPosSaleDto: CreatePosSaleDto) {
    return this.posSaleService.create(createPosSaleDto);
  }

  @Get()
  findAll() {
    return this.posSaleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.posSaleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePosSaleDto: UpdatePosSaleDto) {
    return this.posSaleService.update(id, updatePosSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.posSaleService.remove(id);
  }

  @Post('add-item')
  addPosSaleItem(@Body() addPosSaleItemDto: AddPosSaleItemDto) {
    return this.posSaleService.addPosSaleItem(addPosSaleItemDto);
  }

  @Get('find-all-items/:id')
  findPosSaleItems(@Param('id') id: string) {
    return this.posSaleService.findAllPosSaleItem(id);
  }

  @Get('find-item-one/:id')
  findPosSaleItemOne(@Param('id') id: string) {
    return this.posSaleService.findPosSaleItemOne(id);
  }

  @Patch('update-item/:id')
  updatePosSaleItem(
    @Param('id') id: string,
    @Body() updatePosSaleItemDto: UpdatePosSaleItemDto,
  ) {
    return this.posSaleService.updatePosSaleItem(id, updatePosSaleItemDto);
  }

  @Delete('delete-item/:id')
  deletePosSaleItem(@Param('id') id: string) {
    return this.posSaleService.removePosSaleItem(id);
  }
}
