

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
import { HttpExceptionFilter, User, PaginationDto, Auth } from 'src/app/shared';

import {
  CategoriaEmpresaCreateDto,
  CategoriaEmpresaUpdateDto,
} from './categoria-empresa-create.dto';
import { CategoriaEmpresaService } from './categoria-empresa.service';

@ApiTags('Categoria Empresa')
@Auth()
@Controller('categoria/empresas')
@UseFilters(new HttpExceptionFilter())
export class CategoriaEmpresaController {
  constructor(
    private readonly service: CategoriaEmpresaService,
  ) { 
  }

  //FUNCIONA!!!!
  //@UseGuards(RoleGuard('get'))
  @Get()
  async getMany(@User() user,@Query() pagination: PaginationDto) {
    return await this.service.getMany(pagination);
  }

  //FUNCIONA!!!!
  //@UseGuards(RoleGuard('get'))
  @Get('paginate')
  async _getMany(@User() user,@Query() pagination: PaginationDto) {
    return await this.service.getMany(pagination);
  }

  //FUNCIONA!!!!
  //@UseGuards(RoleGuard('get'))
  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.service.getOne(id);
  }

  //FUNCIONA!!!!
  //@UseGuards(RoleGuard('post'))
  @Post()
  async createOne(@Body() dto: CategoriaEmpresaCreateDto) {
    return await this.service.createOne(dto);
  }

  //FUNCIONA!!!!
  //@UseGuards(RoleGuard('put'))
  @Put(':id')
  async editOne(@Param('id') id: string, @Body() dto: CategoriaEmpresaUpdateDto) {
    return await this.service.editOne(id,dto);
  }

  //FUNCIONA!!!!
  //@UseGuards(RoleGuard('delete'))
  @Delete(':id')
  async logicDelete(@Param('id') id: string) {
    return await this.service.deleteOne(id);
  } 

}