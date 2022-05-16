import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './interfaces/company.interface';

@Injectable()
export class CompanyService {

  constructor(@InjectModel('Company') private readonly companyModel: Model<Company>){}

  async create(createCompanyDto: CreateCompanyDto) {
    const company = await new this.companyModel(createCompanyDto).save()
    return {company: company};
  }

  async findAll() {
    const companies = await this.companyModel.find();
    return {companies: companies};
  }

  async findOne(id: string) {
    const company = await this.companyModel.findById(id).populate('admin', 'fullName email');
    return {company: company};
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return await this.companyModel.findByIdAndUpdate(id, updateCompanyDto);
  }

  async remove(id: string) {
    return await this.companyModel.findByIdAndRemove(id);
  }
}
