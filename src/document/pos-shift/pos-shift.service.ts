import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OpenPosShiftDto } from './dto/open-pos-shift.dto';
import { POSShift } from './interfaces/pos-shift.interface';

@Injectable()
export class PosShiftService {

  constructor(@InjectModel('POSShift') private readonly POSShiftModel: Model<POSShift>){}

  async open(openPosShiftDto: OpenPosShiftDto){
    const openPosShift = new this.POSShiftModel(openPosShiftDto);
    openPosShift.open = true;
    return await openPosShift.save();
  }

  async close(id: string){
    return await this.POSShiftModel.findByIdAndUpdate(id, {open: false, close_at: Date.now()});
  }

  // create(createPosShiftDto: CreatePosShiftDto) { 
  //   return 'This action adds a new posShift';
  // }

  // findAll() {
  //   return `This action returns all posShift`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} posShift`;
  // }

  // update(id: number, updatePosShiftDto: UpdatePosShiftDto) {
  //   return `This action updates a #${id} posShift`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} posShift`;
  // }
}
