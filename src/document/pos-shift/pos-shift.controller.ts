import { Controller, Post, Body, Param } from '@nestjs/common';
import { PosShiftService } from './pos-shift.service';
import { OpenPosShiftDto } from './dto/open-pos-shift.dto';

@Controller('pos-shift')
export class PosShiftController {
  constructor(private readonly posShiftService: PosShiftService) {}

  @Post('open')
  open(@Body() openPosShiftDto: OpenPosShiftDto) {
    return this.posShiftService.open(openPosShiftDto);
  }

  @Post('close/:id')
  close(@Param('id') id: string) {
    return this.posShiftService.close(id);
  }

  // @Post()
  // create(@Body() createPosShiftDto: CreatePosShiftDto) {
  //   return this.posShiftService.create(createPosShiftDto);
  // }

  // @Get()
  // findAll() {
  //   return this.posShiftService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.posShiftService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePosShiftDto: UpdatePosShiftDto) {
  //   return this.posShiftService.update(+id, updatePosShiftDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.posShiftService.remove(+id);
  // }
}
