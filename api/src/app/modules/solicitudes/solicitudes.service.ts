import {
  PaginationDto,
  RESP_MESSAGES,
  responseError,
  responseSuccess,
  UserDto,
} from 'src/app/shared';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { RegistrosFuncionarios } from '../rms/registros-funcionarios/entities';
import {
  SolicitudesCreateDto,
  SolicitudesSearchDto,
} from './dtos';
import { Solicitudes } from './entities';

@Injectable()
export class SolicitudesService {
  constructor(
    @InjectRepository(Solicitudes)
    private readonly repository: Repository<Solicitudes>,
    @InjectRepository(RegistrosFuncionarios)
    private readonly repositoryRegistrosFuncionarios: Repository<RegistrosFuncionarios>,
    ) {
  }

//#region CRUD SERVICES
async getMany(user:UserDto,pag:PaginationDto,search:SolicitudesSearchDto) {
  console.log('SOLICITUDES SEARCH', search)
  const query = this.repository.createQueryBuilder('q')
  .where({status:true})
  //.orderBy()
  const data = await query.select('*').offset((pag.page-1)*pag.limit).limit(pag.limit).getRawMany()
  const count = await query.getCount()
  console.log('SOLICITUDES DATA', data)
  return responseSuccess(RESP_MESSAGES.GET,{data:data,count:count});
}

async getManyById(user:UserDto,pag:PaginationDto,search:SolicitudesSearchDto) {
  console.log('SOLICITUDES SEARCH', search)
  const query = this.repository.createQueryBuilder('q').where({idRegistro: search.idRegistro, status:true})
  const data = await query.select('*').offset((pag.page-1)*pag.limit).limit(pag.limit).getRawMany()
  const count = await query.getCount()
  console.log('SOLICITUDES DATA', data)
  return responseSuccess(RESP_MESSAGES.GET,{data:data,count:count});
}

async getById(user:UserDto,id: number)  {
  try{
    const data  = await  this.repository.findOne({ where:{ id: +id , status:true}})
    if (!data)  throw new Error('No existe Datos con este usuario');
    return responseSuccess(RESP_MESSAGES.GET,data);
  }
  catch (error) {
    if (error instanceof Error) {
      return (responseError(error.message, error.name ));
    }
  }
}

async createOne(user:UserDto,dto: SolicitudesCreateDto) {
  console.log('CREATE NEW SOLICITUDES', dto)
  try{
/*     const getOne = await this.repository.findOne({ where:{ status:true , estado:'pendiente'}});
    if (getOne)  throw new Error('Ya existe Datos con este identificador'); */
    const create = this.repository.create(dto);
    create.UsuarioCreacion=user.username
    const insert = await this.repository.save(create);
    return responseSuccess(RESP_MESSAGES.POST,insert);
  }
  catch (error) {
    if (error instanceof Error) {
      return (responseError(error.message, error.name ));
    }
  }
}

async editOne(user:UserDto,id: number, dto: any) {
  try{
    const getOne = await  this.repository.findOne({ where:{ id: id , status:true}})
    if (!getOne)  throw new Error('No existe un registro con este id');
    const merge = this.repository.merge(getOne,dto);;
    const edit = await  this.repository.save(merge);
    return responseSuccess(RESP_MESSAGES.PUT,edit);
  }
  catch (error) {
  if (error instanceof Error) {
    return (responseError(error.message, error.name ));
  }
}


}

async deleteOne(user:UserDto,id: number) {
  try{
    const getOne = await  this.repository.findOne({ where:{ id: id , status:true}})
    if (!getOne)  throw new Error('No existe un registro con este id');
    await  this.repository.save({...getOne,status:false});
    return responseSuccess(RESP_MESSAGES.DELETE,[]);
  }
  catch (error) {
  if (error instanceof Error) {
    return (responseError(error.message, error.name ));
  }
}

} 
//#endregion

async attend(user:UserDto,id: number, dto: any) {
  try{
    
    const query = this.repository.createQueryBuilder('q').where({id: id ,status:true})
    const getOne = await query.select('*').getRawOne()
    if (!getOne)  throw new Error('No existe un registro con este id');
    console.log('ATTENDDDDD',getOne)
    if(getOne.tipo_solicitud==='modificacionPN'){
      const registroFuncionario = await this.activeEdit(getOne.id_registro)
      console.log('ATTENDDDDD',registroFuncionario)
    }


    const merge = this.repository.merge(getOne,dto);;
    merge.estado='atendido'
    merge.UsuarioAprobador= user.username
    merge.FechaAprobacion= new Date();
    console.log('GETONEEEEe QUERY BUILDER',merge)
    const edit = await  this.repository.save(merge);
    return responseSuccess(RESP_MESSAGES.PUT,edit);
  }
  catch (error) {
    if (error instanceof Error) {
      return (responseError(error.message, error.name ));
    }
  }
}

async decline(user:UserDto,id: number, dto: any) {
  try{

    console.log('DECLINE',id,user)
    const query = this.repository.createQueryBuilder('q').where({id: id ,status:true})
    const getOne = await query.select('*').getRawOne()
    if (!getOne)  throw new Error('No existe un registro con este id');
    const merge = this.repository.merge(getOne,dto);;
    merge.estado='rechazado'
    merge.UsuarioAprobador= user.username
    merge.FechaAprobacion= new Date();
    console.log('GETONEEEEe QUERY BUILDER',merge)
    const edit = await  this.repository.save(merge);
    return responseSuccess(RESP_MESSAGES.PUT,edit);
  }
  catch (error) {
    if (error instanceof Error) {
      return (responseError(error.message, error.name ));
    }
  }
}


async getRegistroFuncionariosById(id: number)  {
  return await  this.repositoryRegistrosFuncionarios.findOne({ where:{ id: id , status:true}})
}

async activeEdit(id: number)  {
  const edited = await  this.repositoryRegistrosFuncionarios.findOne({ where:{ id: id , status:true}})
  edited.edit=true
  return await  this.repositoryRegistrosFuncionarios.save(edited);
}

}
