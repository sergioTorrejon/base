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
import {CiudadesMunicipiosService } from './ciudades_municipios.service';
import { 
  CiudadesMunicipiosSearchDto as searchDto, 
  CiudadesMunicipiosCreateDto as createDto, 
  CiudadesMunicipiosUpdateDto as updateDto
} from './ciudades_municipios.dtos';
import { Auth, User, UserDto, PaginationDto, SortDto } from 'src/app/shared';

@ApiTags('CATALOGOS ESTADOS DEPARTAMENTOS')
@Auth()
@Controller('data/ciudades_municipios')
//@UseFilters(new HttpExceptionFilter())
export class CiudadesMunicipiosController {
  constructor(
    private readonly service:  CiudadesMunicipiosService,
  ) { 
  }

  @Get('listOptions')
  async getOptions(@User() userDto: UserDto, @Query() searchDto: searchDto) {
    return await this.service.getOptions(searchDto);
  }

  //FUNCIONA!!!!
  @Get()
  async getAll(@User() userDto: UserDto, @Query() paginationDto: PaginationDto,@Query() sortDto: SortDto, @Query() searchDto: searchDto ) {
    return await this.service.getAllPaginate(userDto,paginationDto,sortDto,searchDto);
  }

  //FUNCIONA!!!!
  @Get(':id')
  async getOne(@User() userDto: UserDto,@Param('id') id: number) {
    return await this.service.getById(userDto,id);
  }

  //FUNCIONA!!!!
  @Post()
  async createOne(@User() userDto: UserDto,@Body() dto: createDto) {
    return await this.service.createOne(userDto,dto);
  }

  //FUNCIONA!!!!
  @Put(':id')
  async editOne(@User() userDto: UserDto, @Param('id') id: number, @Body() dto: updateDto) {
    return await this.service.editOne(userDto,id,dto);
  }

  //FUNCIONA!!!!
  @Delete(':id')
  async logicDelete(@User() userDto: UserDto,@Param('id') id: number) {
    return await this.service.deleteOne(userDto,id);
  } 
}
