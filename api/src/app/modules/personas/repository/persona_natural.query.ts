import { Raw } from 'typeorm';

import { PersonasSearchDto as searchDto } from '../personas.dtos';

export const whereBuild={
  nroIdentificacion:`COALESCE(nro_identificacion,'') ILIKE :nroIdentificacion`,
  nombres:`(COALESCE(nombres,'')|| ' ' ||COALESCE(primer_apellido,'') || ' ' || COALESCE(segundo_apellido,'')) ILIKE :nombres`,
}

export const buildWhere=(search:searchDto)=>{
  const where:any= {status:true}
  if(search.nroIdentificacion){where.nroIdentificacion = Raw(_ => whereBuild.nroIdentificacion, { nroIdentificacion : `%${search.nroIdentificacion}%` })}
  if(search.nombres){where.nombres = Raw(_ => whereBuild.nombres, { nombres : `%${search.nombres}%` })}
  return where
}