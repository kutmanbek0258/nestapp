import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PosCheckService } from './pos-check.service';
import { CreatePosCheckDto } from './dto/create-pos-check.dto';
import { UpdatePosCheckDto } from './dto/update-pos-check.dto';
import { AddPosCheckItemDto } from './dto/add-pos-check-item.dto';
import { UpdatePosCheckItemDto } from './dto/update-pos-check-item.tdo';

@Controller('pos-check')
export class PosCheckController {
  constructor(private readonly posCheckService: PosCheckService) {}

  @Post()
  create(@Body() createPosCheckDto: CreatePosCheckDto) {
    return this.posCheckService.create(createPosCheckDto);
  }

  @Get()
  findAll() {
    return this.posCheckService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.posCheckService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePosCheckDto: UpdatePosCheckDto) {
    return this.posCheckService.update(id, updatePosCheckDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.posCheckService.remove(id);
  }

  @Post('add-item')
  addPosCheckItem(@Body() addPosCheckItemDto: AddPosCheckItemDto){
    return this.posCheckService.addPosCheckItem(addPosCheckItemDto);
  }

  @Get('find-all-pos-check-items/:id')
  findAllPosCheckItems(@Param('id') productId: string){
    return this.posCheckService.findAllPosCheckItem(productId);
  }

  @Get('find-pos-check-item-one/:id')
  findPosCheckItemOne(@Param('id') id: string){
    return this.posCheckService.findPosCheckItemOne(id);
  }

  @Post('update-item/:id')
  updatePosCheckItem(@Param('id') id: string, @Body() updatePosCheckItemDto: UpdatePosCheckItemDto){
    return this.posCheckService.updatePosCheckItem(id, updatePosCheckItemDto);
  }

  @Delete('remove-pos-check-item/:id')
  removePosCheckItem(@Param('id') id: string){
    return this.posCheckService.removePosCheckItem(id);
  }

}
