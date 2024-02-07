import {
  PaginationDto,
  RESP_MESSAGES,
  responseError,
  responseSuccess,
  SortDto,
  UserDto,
} from 'src/app/shared';
import {
  FindManyOptions,
  Repository,
} from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { EmpresasService } from '../empresas/empresas.service';
import {
  RegistrosFuncionariosCreateDto as createDto,
  RegistrosFuncionariosSearchDto as searchDto,
  RegistrosFuncionariosUpdateDto as updateDto,
} from './dtos';
import { RegistrosFuncionarios } from './entities';
import {
  findBuild,
  selectMany,
  selectReport,
  titleHeader,
} from './repositorry/registros.query';

@Injectable()
export class RegistrosFuncionariosService {
  constructor(
    @InjectRepository(RegistrosFuncionarios)
    private readonly repository: Repository<RegistrosFuncionarios>, 
    private readonly serviceEmpresa: EmpresasService,
    ) {
  }  

//#region CRUD SERVICES
  async getMany(userDto:UserDto,paginationDto: PaginationDto, sortDto:SortDto,dto:searchDto) {
    const query = this.repository.createQueryBuilder('rf')
        .innerJoin('rf.personaNatural', 'pn')
        .innerJoin('rf.empresa', 'e')
        .leftJoinAndSelect("rf.bajas", "baja", "baja.status = :status", {status: true})
        .leftJoinAndSelect("rf.tipoCargo", "tc")
        .where('rf.status=true')
        .orderBy(sortDto.sort, sortDto.order=='asc'?'ASC':'DESC');
    if(dto.estado) query.andWhere('rf.estado= :estado', { estado: dto.estado }); 
    if(dto.tipoCargo) query.andWhere('tc.id= :tipoCargo', { tipoCargo: dto.tipoCargo });
    if(dto.cargo) query.andWhere("rf.cargo ILIKE :cargo", { cargo: `%${dto.cargo}%` });
    if(dto.nroIdentificacion) query.andWhere("pn.nroIdentificacion ILIKE :nroId", { nroId: `%${dto.nroIdentificacion}%` });
    if(dto.nombres) query.andWhere("pn.nombres ILIKE :nombres ", { nombres: `%${dto.nombres}%` });
    if(dto.apellidos) query.andWhere("pn.primer_apellido LIKE :apellidos or pn.segundo_apellido ILIKE :apellidos", { apellidos: `%${dto.apellidos}%` });
    if(dto.fechaIngreso) query.andWhere("rf.fecha_ingreso> :fechaIngreso", { fechaIngreso: new Date(dto.fechaIngreso)}); 
    if(userDto.company&&userDto.company!='APS') query.andWhere('e.codigo= :codigo', { codigo: userDto.company });   
    if(dto.persona) query.andWhere('rf.id_persona= :id_persona', { id_persona: dto.persona });
    if(dto.tipoEmpresa) query.andWhere('e.id_tipo_empresa= :tipoEmpresa', { tipoEmpresa: dto.tipoEmpresa });
    if(dto.codEmpresa) query.andWhere('e.codigo= :codEmpresa', { codEmpresa: dto.codEmpresa });
    const isAdministrator=userDto.role.includes('administrador')||userDto.company=='APS'
    if (!isAdministrator){
      if(userDto.company) query.andWhere('e.codigo= :codigo', { codigo: userDto.company });
    }
    const data = await query.select(selectMany).offset((paginationDto.page-1)*paginationDto.limit).limit(paginationDto.limit).getRawMany()
    const count = await query.getCount()
    return responseSuccess(RESP_MESSAGES.GET,{data:data,count:count});
  }

  async getPag(user:UserDto, pag: PaginationDto, sort:SortDto, search:searchDto) {
    console.log('SERVICE',user)

    const findOptions:FindManyOptions = {}
    findOptions.where = findBuild(search)
    findOptions.relations = {personaNatural:true}
    findOptions.order = {[sort.sort]:sort.order}
    findOptions.take = pag.limit 
    findOptions.skip = (pag.page-1)*pag.limit

    const rep = this.repository

    const data = await rep.find(findOptions)
    const count = await this.repository.count(findOptions)
    return responseSuccess(RESP_MESSAGES.GET,{data:data,count:count},user);
  }

  async getManyConsulta(pag: PaginationDto,dto:searchDto) {
    console.log('DATOS BUSQUEDA',dto)
    const query = this.repository.createQueryBuilder('rf')
        .innerJoin('rf.personaNatural', 'pn')
        .innerJoin('rf.empresa', 'e')
        .leftJoinAndSelect("rf.bajas", "baja", "baja.status = :status", {status: true})
        .leftJoinAndSelect("rf.tipoCargo", "tc")
        .where('rf.status=true');
    if(dto.nroIdentificacion) query.andWhere("pn.nroIdentificacion = :nroIdentificacion", { nroIdentificacion: dto.nroIdentificacion });
    if(dto.nombres) query.andWhere("pn.nombres ILIKE :nombres ", { nombres: `${dto.nombres}` });
    if(dto.apellidos) query.andWhere("pn.primer_apellido ILIKE :apellidos or pn.segundo_apellido ILIKE :apellidos", { apellidos: `${dto.apellidos}` });
    const data = await query.select(selectMany).offset((pag.page-1)*pag.limit).limit(pag.limit).getRawMany()
    const count = await query.getCount()
    return responseSuccess(RESP_MESSAGES.GET,{data:data,count:count});
  }

  async getManyReport(user:UserDto,dto:searchDto) {
    const query = this.repository.createQueryBuilder('rf')
        .innerJoin('rf.personaNatural', 'pn')
        .innerJoin('rf.empresa', 'e')
        .leftJoinAndSelect("rf.bajas", "baja", "baja.status = :status", {status: true})
        .leftJoinAndSelect("rf.tipoCargo", "tc")
        .where('rf.status=true');
        //.orderBy(sortDto.sort, sortDto.order=='asc'?'ASC':'DESC');
    if(dto.estado) query.andWhere('rf.estado= :estado', { estado: dto.estado }); 
    if(dto.tipoCargo) query.andWhere('tc.id= :tipoCargo', { tipoCargo: dto.tipoCargo });
    if(dto.cargo) query.andWhere("rf.cargo ILIKE :cargo", { cargo: `%${dto.cargo}%` });
    if(dto.nroIdentificacion) query.andWhere("pn.nroIdentificacion ILIKE :nroId", { nroId: `%${dto.nroIdentificacion}%` });
    if(dto.nombres) query.andWhere("pn.nombres ILIKE :nombres ", { nombres: `%${dto.nombres}%` });
    if(dto.apellidos) query.andWhere("pn.primer_apellido LIKE :apellidos or pn.segundo_apellido ILIKE :apellidos", { apellidos: `%${dto.apellidos}%` });
    if(dto.fechaIngreso) query.andWhere("rf.fecha_ingreso> :fechaIngreso", { fechaIngreso: new Date(dto.fechaIngreso)}); 
    if(user.company&&user.company!='APS') query.andWhere('e.codigo= :codigo', { codigo: user.company });   
    //if(dto.persona) query.andWhere('rf.id_persona= :id_persona', { id_persona: dto.persona });
    if(dto.tipoEmpresa) query.andWhere('e.id_tipo_empresa= :tipoEmpresa', { tipoEmpresa: dto.tipoEmpresa });
    if(dto.codEmpresa) query.andWhere('e.codigo= :codEmpresa', { codEmpresa: dto.codEmpresa });
    const isAdministrator=user.role.includes('administrador')||user.company=='APS'
    if (!isAdministrator){
      if(user.company) query.andWhere('e.codigo= :codigo', { codigo: user.company });
    }
    const header = titleHeader
    const data = await query.select(selectReport).getRawMany()
    return {data:data,header:header};
  }

  async getById(userDto:UserDto,id: number)  {
    try{
      const getOne  = await  this.repository.findOne({ where:{ id: id , status:true}})
      if (!getOne)  throw new Error('No existe Datos con este usuario');

      return responseSuccess(RESP_MESSAGES.GET,getOne,userDto);
    }
    catch (error) {
      if (error instanceof Error) {
        return (responseError(error.message, error.name ,userDto));
      }
    }
  }

  async getOne(id:any)  {
    const query = this.repository.createQueryBuilder('rf')
        .innerJoin('rf.personaNatural', 'pn')
        .innerJoin('rf.empresa', 'e')
        .leftJoinAndSelect("rf.bajas", "baja", "baja.status = :status", {status: true})
        .leftJoinAndSelect("rf.tipoCargo", "tc")
        .where('rf.status=true')
        .andWhere('rf.id=:id', {id: id});


        const data = await query.select(selectMany).getRawOne()
        return data
  }

  async createOne(userDto: UserDto,dto: createDto) {
    try{
      const empresa :any = await this.serviceEmpresa.getOneByCode(userDto.company);
      dto.empresa= empresa.id
      const create =  this.repository.create(dto);
      create.userCreate = userDto.username;
      const data = await this.repository.save(create);
      return responseSuccess(RESP_MESSAGES.POST,data);
    }
    catch (error) {
    if (error instanceof Error) {
      return (responseError(error.message, error.name ));
      }
    }
  }

  async editOne(id: number, dto: updateDto) {
    try{
      const getOne = await  this.repository.findOne({ where:{ id: id , status:true}})
      if (!getOne)  throw new Error('No existe un usuario con este id');
      const edited = this.repository.merge(getOne,dto);
      edited.edit=false
      const data = await  this.repository.save(edited);
      return responseSuccess(RESP_MESSAGES.PUT,data);
    }
    catch (error) {
      if (error instanceof Error) {
        return (responseError(error.message, error.name ));
      }
    }
  }

  async deleteOne(id: number) {
    try{
      const getOne = await  this.repository.findOne({ where:{ id: id , status:true}})
      if (!getOne)  throw new Error('No existe un usuario con este id');
      const data = await  this.repository.save({...getOne,status:false});
      return await responseSuccess(RESP_MESSAGES.DELETE,data);
    }
    catch (error) {
    if (error instanceof Error) {
      return (responseError(error.message, error.name ));
    }
  }
  } 

  async upDateBaja(id: any) {
    try{
      const getOne = await  this.repository.findOne({ where:{ id: id , status:true}})
      console.log('USUARIO',getOne)
      if (!getOne)  throw new Error('No existe un usuario con este id');
      const edited = Object.assign(getOne);
      edited.estado='baja';
      //edited.status=false
      const data = await  this.repository.save(edited);
      return responseSuccess(RESP_MESSAGES.PUT,data);
    }
    catch (error) {
    if (error instanceof Error) {
      return (responseError(error.message, error.name ));
    }
  }
  }
//#endregion

  async activeEdit(id: number, dto: updateDto) {
    try{
      const getOne = await  this.repository.findOne({ where:{ id: id , status:true}})
      if (!getOne)  throw new Error('No existe un usuario con este id');
      const edited = this.repository.merge(getOne,dto);
      const data = await  this.repository.save(edited);
      return responseSuccess(RESP_MESSAGES.PUT,data);
    }
    catch (error) {
      if (error instanceof Error) {
        return (responseError(error.message, error.name ));
      }
    }
  }

}