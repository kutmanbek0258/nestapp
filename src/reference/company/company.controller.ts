import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
@UseGuards(RolesGuard)
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  // @UseGuards(AuthGuard('jwt'))
  // @Roles('admin')
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  // @UseGuards(AuthGuard('jwt'))
  // @Roles('admin')
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':id')
  // @UseGuards(AuthGuard('jwt'))
  // @Roles('admin')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Patch(':id')
  // @UseGuards(AuthGuard('jwt'))
  // @Roles('admin')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(id, updateCompanyDto);
  }

  @Delete(':id')
  // @UseGuards(AuthGuard('jwt'))
  // @Roles('admin')
  remove(@Param('id') id: string) {
    return this.companyService.remove(id);
  }
}
