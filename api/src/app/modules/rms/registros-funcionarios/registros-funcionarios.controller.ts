import {
  Auth,
  csvBuild,
  JwtAdminRoleGuard,
  PaginationDto,
  pdfBuild,
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
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  RegistrosFuncionariosCreateDto as createDto,
  RegistrosFuncionariosSearchDto as searchDto,
  RegistrosFuncionariosUpdateDto as updateDto,
} from './dtos';
import { RegistrosFuncionariosService } from './registros-funcionarios.service';

@ApiTags('Registros Funcionarios')
@Auth()
@Controller('registros_funcionarios')
//@UseFilters(new HttpExceptionFilter())
export class RegistrosFuncionariosController {
  constructor(
    private readonly service: RegistrosFuncionariosService,
  ) { 
  }

  //FUNCIONA!!!!
  //@UseGuards(JwtConsultaRoleGuard)
  @Get('consulta')
  async getManyConsulta(@User() userDto: UserDto, @Query() pagination: PaginationDto, @Query() sort: SortDto, @Query() searchDto: searchDto) {
    console.log('DATOS BUSQUEDA',searchDto)
    return await this.service.getManyConsulta(pagination,searchDto);
  }

  //---------------GET ONE FILE FOR VIEW AND DOWNLOAD ------------//
  @Get('downloadpdf')
  async getReportDataPdf(@User() userDto: UserDto, @Query() searchDto: searchDto, @Res() res:any) {
    const data = await this.service.getManyReport(userDto, searchDto);
    const pdf = await pdfBuild(data);
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', `inline; filename=reporte.pdf`)
    return res.send(pdf)
  }

  @Get('downloadcsv')
  async getReportData(@User() userDto: UserDto, @Query() searchDto: searchDto, @Res() res) {
    console.log('hasta aqui', searchDto)
    const data = await this.service.getManyReport(userDto,searchDto);
    console.log('hasta aqui', data)
    const csv = await csvBuild(data);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `inline; filename=Reporte.xlsx`);
    return res.send(csv);
  }

  //FUNCIONA!!!!
  @UseGuards(JwtAdminRoleGuard)
  @Get()
  async getMany(@User() userDto: UserDto,@Query() paginationDto: PaginationDto,@Query() sortDto: SortDto, @Query() searchDto: searchDto) {
    console.log(searchDto)
    console.log('usuarisssso',userDto)
    return await this.service.getMany(userDto,paginationDto,sortDto,searchDto);
  }

    //FUNCIONA!!!!
    @UseGuards(JwtAdminRoleGuard)
    @Get('rep')
    async getRepMany(@User() userDto: UserDto,@Query() paginationDto: PaginationDto,@Query() sortDto: SortDto, @Query() searchDto: searchDto) {
      console.log(searchDto)
      console.log('usuario',userDto)
      return await this.service[searchDto.tipoReporte](userDto,paginationDto,sortDto,searchDto);
    }

  //FUNCIONA!!!!
  @UseGuards(JwtAdminRoleGuard)
  @Get(':id')
  async getOne(@User() userDto: UserDto,@Param('id') id: number) {
    return await this.service.getById(userDto,id);
  }

  //FUNCIONA!!!!
  @UseGuards(JwtAdminRoleGuard)
  @Post()
  async createOne(@User() userDto: UserDto,@Body() dto: createDto) {
    return await this.service.createOne(userDto,dto);
  }

  //FUNCIONA!!!!
  @UseGuards(JwtAdminRoleGuard)
  @Put(':id')
  async editOne(@User() userDto: UserDto, @Param('id') id: number, @Body() dto: updateDto) {
    return await this.service.editOne(id,dto);
  }

  //FUNCIONA!!!!
  @UseGuards(JwtAdminRoleGuard)
  @Delete(':id')
  async logicDelete(@User() userDto: UserDto,@Param('id') id: number) {
    return await this.service.deleteOne(id);
  } 



  //SOLICITUDES

  @Get('activeEdit')
  async attend(@User() userDto: UserDto, @Query() searchDto: searchDto, @Res() res) {
    console.log('hasta aqui', searchDto)
    const data = await this.service.getManyReport(userDto, searchDto);
    console.log('hasta aqui', data)
    const csv = await csvBuild(data);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `inline; filename=Reporte.xlsx`);
    return res.send(csv);
  }


}