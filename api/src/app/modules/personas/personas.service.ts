import * as moment from 'moment';
import {
  PostConsultaDatoPersonaCertificacion,
} from 'src/app/services/segip-api/segip';
import {
  ERROR_MESSAGES,
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

import {
  PersonasCreateDto as createDto,
  PersonasSearchDto as searchDto,
  PersonasUpdateDto as updateDto,
} from './personas.dtos';
import { Personas } from './personas.entity';
import { buildWhere } from './repository/persona_natural.query';

@Injectable()
export class PersonasService {

  constructor(@InjectRepository(Personas) private readonly repository: Repository<Personas>) {
  }

  async getData(user:UserDto, pag:PaginationDto, sort:SortDto, search:searchDto) {

    const findOptions:FindManyOptions = {}
    findOptions.where = buildWhere(search) 
    findOptions.order = {[sort.sort]:sort.order} 
    findOptions.take = pag.limit
    findOptions.skip = (pag.page-1)*pag.limit
    const data = await this.repository.find(findOptions)
    const count = await this.repository.count(findOptions)
    return responseSuccess(RESP_MESSAGES.GET,{data:data,count:count});
  }

  async getById(user:UserDto, id: number)  {
    try{
      const getOne = await this.repository.findOne({ where:{ id: id , status:true}})
      if (!getOne) throw new Error(ERROR_MESSAGES.GET);
      return responseSuccess(RESP_MESSAGES.GET,getOne);
    }
    catch (error) {
      if (error instanceof Error) {
        return (responseError(error.message, error.name));
      }
    }
  }

  async createOne(user:UserDto, dto: createDto) {
    try{
      const getOne = await  this.repository.findOne({ where:{ nroIdentificacion: dto.nroIdentificacion , status:true}})
      if (getOne)  throw new Error(ERROR_MESSAGES.POST);

      let procedeRegistro = true;
      if(process.env.SEGIP_ENABLED === 'true'){
      procedeRegistro = PostConsultaDatoPersonaCertificacion(dto.nroIdentificacion, null, dto.nombres, dto.primerApellido, dto.segundoApellido, dto.fechaNacimiento);

      }
      if(procedeRegistro){
        const create = this.repository.create(dto);
        const insert = await this.repository.save(create);
        const getOne = await this.repository.findOne({ where:{ id: insert.id , status:true}}) 
        return responseSuccess(RESP_MESSAGES.POST,getOne);
      }
      else
        throw new Error('La información que esta intentado registrar no se encuentra en la base de datos del SEGIP');
    }
    catch (error) {
      if (error instanceof Error) {
        return (responseError(error.message, error.name ));
      }
    }
  }

  async editOne(user:UserDto, id: number, dto: updateDto) {
    try{
      const getOne = await  this.repository.findOne({ where:{ id: id , status:true}})
      if (!getOne)  throw new Error(ERROR_MESSAGES.GET);
      const merge = this.repository.merge(getOne,dto);

      let procedeRegistro = true;
      if(process.env.SEGIP_ENABLED === 'true'){
        let fechaNacimiento = moment(merge.fechaNacimiento).format('DD-MM-YYYY');
        //procedeRegistro = PostConsultaDatoPersonaCertificacion(merge.nroIdentificacion, null, merge.nombres, merge.primerApellido, merge.segundoApellido, fechaNacimiento);
      }
      if(procedeRegistro){
        await  this.repository.save(merge);
        return responseSuccess(RESP_MESSAGES.PUT, []);
      }
      else
        throw new Error('La información que esta intentado registrar no se encuentra en la base de datos del SEGIP');
    }
    catch (error) {
      if (error instanceof Error) {
        return (responseError(error.message, error.name ));
      }
    }
  }

  async deleteOne(user:UserDto, id: number)
  {
    try
    {
      const getOne = await  this.repository.findOne({ where:{ id:id, status:true}})
      if (!getOne)  throw new Error(ERROR_MESSAGES.GET);
      await this.repository.save({...getOne,status:false});
      return responseSuccess(RESP_MESSAGES.DELETE,[]);
    }
    catch (error)
    {
      if (error instanceof Error){ return (responseError(error.message, error.name )) }
    }
  } 

}