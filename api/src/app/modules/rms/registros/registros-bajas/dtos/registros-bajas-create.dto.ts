import {
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

import {
  RegistrosFuncionarios,
} from '../../../registros-funcionarios/entities';

export class RegistrosBajasCreateDto {

  @ApiProperty()
  @IsString()
  funcionario: RegistrosFuncionarios;

 
  @IsOptional()
  @IsString()
  @MaxLength(4,{message:'La rc_numero longitud debe ser de 4 caracteres'})
  nroBaja?: string='';

  @IsOptional()
  @IsString()
  fechaBaja?:string='';

  @IsOptional()
  @IsString()
  @MaxLength(2000,{message:'La longitud rc_comentarios no puede ser menor a 2 caracteres y mayor a 2000 caracteres'})
  comentarios?: string='';

  @IsOptional()
  @IsString()
  hechosPosteriores?:string='';

}
