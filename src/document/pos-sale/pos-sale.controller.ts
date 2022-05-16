import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PosSaleService } from './pos-sale.service';
import { CreatePosSaleDto } from './dto/create-pos-sale.dto';
import { UpdatePosSaleDto } from './dto/update-pos-sale.dto';

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
    return this.posSaleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePosSaleDto: UpdatePosSaleDto) {
    return this.posSaleService.update(+id, updatePosSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.posSaleService.remove(+id);
  }
}
