import { JwtAuthGuard } from 'src/app/auth/guard/jwt-auth.guard';
import {
  Auth,
  HttpExceptionFilter,
  PaginationDto,
  SortDto,
  User,
  UserDto,
} from 'src/app/shared';

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
  UseGuards,
} from '@nestjs/common';

import {
  PersonasCreateDto as createDto,
  PersonasSearchDto as searchDto,
  PersonasUpdateDto as updateDto,
} from './personas.dtos';
import { PersonasService } from './personas.service';

@Auth()
@Controller('persona_natural')
@UseGuards(JwtAuthGuard)
@UseFilters(new HttpExceptionFilter())
export class PersonasController {
  constructor(
    private readonly service: PersonasService,
  ) { 
  }

  @Get()
  async getMany(@User() user:UserDto,@Query() pag: PaginationDto, @Query() sort: SortDto, @Query() search: searchDto) {
    return await this.service.getData(user,pag,sort,search);
  }

  @Get(':id')
  async getById(@User() user:UserDto,@Param('id') id: number) {
    return await this.service.getById(user,id);
  }

  @Post()
  async createOne(@User() user:UserDto, @Body() dto: createDto) {
    return await this.service.createOne(user,dto);
  }

  @Put(':id')
  async editOne(@User() user:UserDto, @Param('id') id: number, @Body() dto: updateDto) {
    return await this.service.editOne(user,id,dto);
  }

  @Delete(':id')
  async logicDelete(@User() user:UserDto,@Param('id') id: number) {
    return await this.service.deleteOne(user,id);
  } 

}