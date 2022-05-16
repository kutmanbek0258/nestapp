import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PosService } from './pos.service';
import { CreatePOSDto } from './dto/create-pos.dto';
import { UpdatePOSDto } from './dto/update-pos.dto';

@Controller('pos')
export class PosController {
  constructor(private readonly posService: PosService) {}

  @Post()
  create(@Body() createPoDto: CreatePOSDto) {
    return this.posService.create(createPoDto);
  }

  @Get()
  findAll() {
    return this.posService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.posService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePoDto: UpdatePOSDto) {
    return this.posService.update(id, updatePoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.posService.remove(id);
  }
}
