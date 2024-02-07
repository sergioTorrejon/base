

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseFilters,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter, User, PaginationDto } from 'src/app/shared';
import { CatalogoCreateDto, CatalogoUpdateDto } from './catalogo.dto';

import { CatalogoService } from './catalogo.service';

@ApiTags('Catalogo')
//@Auth()
@Controller('catalogo')
@UseFilters(new HttpExceptionFilter())
export class CatalogoController {
  constructor(
    private readonly service: CatalogoService,
  ) { 
  }

  //FUNCIONA!!!!
  @Get()
  async getMany(@User() user,@Query() pagination: PaginationDto) {
    return await this.service.getMany(pagination);
  }

  //FUNCIONA!!!!
  @Get('paginate')
  async _getMany(@User() user,@Query() pagination: PaginationDto) {
    return await this.service.getMany(pagination);
  }

  @Get('options')
  async getOptions() {
    return await this.service.getOptions();
  }

  //FUNCIONA!!!!
  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.service.getOne(id);
  }

  //FUNCIONA!!!!
  @Post()
  async createOne(@Body() dto: CatalogoCreateDto) {
    return await this.service.createOne(dto);
  }

  //FUNCIONA!!!!
  @Put(':id')
  async editOne(@Param('id') id: string, @Body() dto: CatalogoUpdateDto) {
    return await this.service.editOne(id,dto);
  }

  //FUNCIONA!!!!
  @Delete(':id')
  async logicDelete(@Param('id') id: string) {
    return await this.service.deleteOne(id);
  } 

  //FUNCIONA!!!!
  @Delete(':id')
  async phisicDelete(@Param('id') id: string) {
    return await this.service.deleteOne(id);
  } 
}