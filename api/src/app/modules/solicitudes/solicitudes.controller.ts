import {
  Auth,
  PaginationDto,
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
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  SolicitudesCreateDto,
  SolicitudesSearchDto,
  SolicitudesUpdateDto,
} from './dtos';
import { SolicitudesService } from './solicitudes.service';

@ApiTags('Solicitudes')
@Auth()
@Controller('solicitudes')
//@UseFilters(new HttpExceptionFilter())
export class SolicitudesController {
  constructor(
    private readonly service: SolicitudesService,
  ) { 
  }

  //FUNCIONA!!!!
  @Get()
  async getMany(@User() user:UserDto,@Query() pagination: PaginationDto, @Query() search:SolicitudesSearchDto) {
    console.log('SOLICITUDES',search)
    return await this.service.getMany(user,pagination,search);
  }

  @Get('/registro')
  async getManyById(@User() user:UserDto,@Query() pagination: PaginationDto, @Query() search:SolicitudesSearchDto) {
    console.log('SOLICITUDES',search)
    return await this.service.getManyById(user,pagination,search);
  }

  //FUNCIONA!!!!
  @Get(':id')
  async getById(@User() user,@Param('id') id: number) {
    return await this.service.getById(user,id);
  }

  //FUNCIONA!!!!
  @Post()
  async createOne(@User() user, @Body() dto: SolicitudesCreateDto) {
    return await this.service.createOne(user,dto);
  }

  //FUNCIONA!!!!
  @Put(':id')
  async editOne(@User() user,@Param('id') id: number, @Body() dto: SolicitudesUpdateDto) {
    return await this.service.editOne(user,id,dto);
  }

  //FUNCIONA!!!!
  @Delete(':id')
  async deleteOne(@User() user,@Param('id') id: number) {
    return await this.service.deleteOne(user,id);
  } 


  @Put('/attend/:id')
  async attend(@User() user,@Param('id') id: number, @Body() dto: any) {
    return await this.service.attend(user,id,dto);
  }

  @Put('/decline/:id')
  async decline(@User() user,@Param('id') id: number, @Body() dto: any) {
    return await this.service.decline(user,id,dto);
  }


}