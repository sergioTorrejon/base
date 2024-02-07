import { GLOBAL_OPTIONS } from 'src/app/core';
import {
  PaginationDto,
  RESP_MESSAGES,
  responseError,
  responseSuccess,
} from 'src/app/shared';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  CategoriaEmpresaService,
} from '../../rms/empresas/categoria-empresa/categoria-empresa.service';
import { PaisesService } from '../paises/paises.service';
import {
  CatalogoCreateDto,
  CatalogoUpdateDto,
} from './catalogo.dto';
import { Catalogo } from './catalogo.entity';

@Injectable()
export class CatalogoService {
  constructor(
    @InjectRepository(Catalogo)
    private readonly repository: Repository<Catalogo>,
    private readonly serviceDataPaises: PaisesService,
    private readonly serviceCategoriasEmpresas: CategoriaEmpresaService,
    )
    {
  }

  //#region CRUD SERVICES
  async getMany(pag: PaginationDto) {
    const data = await  this.repository.find({ where:{status:true}})
    const count = await  this.repository.count({where:{status:true}})
    return responseSuccess(RESP_MESSAGES.GET,{data:data,count:count});
  }

  async getOne(id: string)  {
    try{
      const data  = await  this.repository.findOne({ where:{ id: +id , status:true}})
      if (!data)  throw new Error('No existe Datos con este usuario');
      return responseSuccess(RESP_MESSAGES.GET,{data:data});
    }
    catch (error) {
      if (error instanceof Error) {
        return (responseError(error.message, error.name ));
      }
    }
  }

  async createOne(dto: CatalogoCreateDto) {
    try{
      const getOne = await  this.repository.findOne({ where:{codigo: dto.codigo, status: true }});
      if (getOne)  throw new Error('ya existe un registro con el identificador');
      console.log('AQUI')  
      const create =  this.repository.create(dto);
      const {codigo,...data} = await  this.repository.save(create);
      return responseSuccess(RESP_MESSAGES.POST,{codigo});
    }
    catch (error) {
    if (error instanceof Error) {
      return (responseError(error.message, error.name ));
    }
  }

  }

  async editOne(id: string, dto: CatalogoUpdateDto) {
    try{
      const getOne = await  this.repository.findOne({ where:{ id: +id , status:true}})
      if (!getOne)  throw new Error('No existe un usuario con este id');
      const edited = Object.assign(getOne);
      const {username,...data} = await  this.repository.save(edited);
      return responseSuccess(RESP_MESSAGES.PUT,{username});
    }
    catch (error) {
      if (error instanceof Error) {
        return (responseError(error.message, error.name ));
      }
    }
  }

  async deleteOne(id: string) {
    try{
      const getOne = await  this.repository.findOne({ where:{ id: +id , status:true}})
      if (!getOne)  throw new Error('No existe un usuario con este id');
      const {codigo,...data} = await  this.repository.save({...getOne,status:false});
      return await responseSuccess(RESP_MESSAGES.DELETE,{codigo});
    }
    catch (error) {
    if (error instanceof Error) {
      return (responseError(error.message, error.name ));
    }
  }

  } 
  //#endregion

  async getOpts() {
    const data = {
      
      nivel_cargo: await this.queryOptions('nivel_cargo'),
      tipo_accionista: await this.queryOptions('tipo_accionista'),
      estado_funcionario: await this.queryOptions('estado_funcionario'),
      tipo_funcionario: await this.queryOptions('tipo_funcionario'),
      ...GLOBAL_OPTIONS,
    }
    return responseSuccess(RESP_MESSAGES.GET,data);
  }


  async getOptions() {
    const catempr = await this.serviceCategoriasEmpresas.getOptions();
    const data = {
      nivel_cargo: await this.queryOptions('nivel_cargo'),
      tipo_accionista: await this.queryOptions('tipo_accionista'),
      estado_funcionario: await this.queryOptions('estado_funcionario'),
      tipo_funcionario: await this.queryOptions('tipo_funcionario'),
      ...GLOBAL_OPTIONS,
      categoria_empresa:catempr.data
    }
    return responseSuccess(RESP_MESSAGES.GET,data);
  }

  async queryOptions(categoria:string) {
    const data = await this.repository
    .createQueryBuilder('q')
    .select('q.id as value, q.descripcion as label')
    .where('q.categoria= :categoria', { categoria: categoria })
    .getRawMany();
    return data;
  }


  async queryStringOptions(categoria:string) {
    const data = await this.repository
    .createQueryBuilder('q')
    .select('q.id as descripcion, q.descripcion as label')
    .where('q.categoria= :categoria', { categoria: categoria })
    .getRawMany();
    return data;
  }


  async listOptionsPaises (categoria:string) {
    const paises = await this.serviceDataPaises.getOptions();
    const data = await this.repository
    .createQueryBuilder('q')
    .select('q.id as value, q.descripcion as label')
    .where('q.categoria= :categoria', { categoria: categoria })
    .getRawMany();
    return responseSuccess(RESP_MESSAGES.GET,data);
  }


}






