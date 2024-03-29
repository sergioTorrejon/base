import * as dotenv from 'dotenv';
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
  RegistrosFuncionariosService,
} from '../../registros-funcionarios/registros-funcionarios.service';
import {
  RegistrosBajasCreateDto,
  RegistrosBajasUpdateDto,
} from './dtos';
import { RegistrosBajas } from './entities';

dotenv.config();
@Injectable()
export class RegistrosBajasService {
  constructor(
    @InjectRepository(RegistrosBajas)
    private readonly repository: Repository<RegistrosBajas>,
    private readonly serviceRegistrosFuncionarios: RegistrosFuncionariosService,
    ) {
  }

//#region CRUD SERVICES
  async getMany(pag: PaginationDto) {
    const data = await  this.repository.find({ where:{status:true}})
    console.log(data)
    const count = await  this.repository.count({where:{status:true}})
    return responseSuccess(RESP_MESSAGES.GET,{data:data,count:count});
  }

  async getAll() {
    const data = await  this.repository.find({ where:{status:true}})
    console.log(data)
    const count = await  this.repository.count({where:{status:true}})
    return responseSuccess(RESP_MESSAGES.GET,{data:data,count:count});
  }

   async getOne(id:any)  {
    try{
      const getOne = await this.repository.createQueryBuilder('q')
      .select("q.id as id,q.nro_baja as nro_baja, q.fecha_baja as fecha_baja,to_char(q.fecha_baja,'DD-MM-YYYY') as fecha_baja_format, q.comentarios as comentarios,cb.codigo as codigoBaja,(cb.codigo || '.- ' || cb.descripcion) as categoria_baja,cb.id as id_categoria_baja ")
      .innerJoin('q.funcionario', 'fn')
      .innerJoin('q.categoriaBaja', 'cb')
      .where('q.status=true')
      .andWhere("q.id = :id", { id: id })
      .getRawOne();
      console.log('COUNTTT---->',getOne)
      const data = await this.repository.findOne({ where:{ id: id , status:true}})
      console.log('****************************GET ONE BAJA************')
      console.log(data)
      if (!data)  throw new Error('No existe Datos con este usuario');
      return responseSuccess(RESP_MESSAGES.GET,{data:getOne});
    }
    catch (error) {
      if (error instanceof Error) {
        return (responseError(error.message, error.name ));
      }
    }
  }

  async createOne(dto: RegistrosBajasCreateDto) {
    try{
      
      const getOne = await this.repository.createQueryBuilder('q')
      .innerJoin('q.funcionario', 'fn')
      .where('q.status=true')
      .andWhere("q.funcionario = :funcionario", { funcionario: dto.funcionario })
      .getCount();
      //const getOne = await  this.repository.findOne({ where:{nroBaja: dto.nroBaja, status: true }});
      if(getOne) throw new Error('ya existe un usuario con el nombre de usuario');
      
     const buildAsfi:any = await this.serviceRegistrosFuncionarios.getOne(dto.funcionario)


    }
    catch (error) {
      if (error instanceof Error) {
        return (responseError(error.message, error.name ));
      }
    }
  }

  async editOne(id: number, dto: RegistrosBajasUpdateDto) {
    try{
      const getOne = await  this.repository.findOne({ where:{ id: +id , status:true}})
      if (!getOne)  throw new Error('No existe un usuario con este id');
      const edited = this.repository.merge(getOne,dto);
      const data = await  this.repository.save(edited);
      return responseSuccess(RESP_MESSAGES.PUT,{data});
    }
    catch (error) {
      if (error instanceof Error) {
        return (responseError(error.message, error.name ));
      }
    }
  }

  async deleteOne(id: any) {
    try{
      const getOne = await  this.repository.findOne({ where:{ id: id , status:true}, relations:{funcionario:true}})
      console.log(getOne,'ANULACION',getOne.funcionario.id)
      if (!getOne)  throw new Error('No existe un usuario con este id');

      const data = await  this.repository.save({...getOne,status:false});
      return responseSuccess(RESP_MESSAGES.DELETE,data);
    }
    catch (error) {
      if (error instanceof Error) {
        return (responseError(error.message, error.name ));
      }
    }
  } 


  async buildASFI (){

  }
//#endregion

}

