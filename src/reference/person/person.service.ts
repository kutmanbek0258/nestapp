import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './interfaces/person.interface';

@Injectable()
export class PersonService {

  constructor(@InjectModel('Person') private readonly personModel: Model<Person>){}

  async create(createPersonDto: CreatePersonDto) {
    const person = new this.personModel(createPersonDto);
    return await person.save();
  }

  async findAll() {
    return await this.personModel.find();
  }

  async findOne(id: string) {
    return await this.personModel.findById(id);
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    return await this.personModel.findByIdAndUpdate(id, updatePersonDto);
  }

  async remove(id: string) {
    return await this.personModel.findByIdAndRemove(id);
  }
}
