import {
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

import {
  RegistrosFuncionarios,
} from '../../rms/registros-funcionarios/entities';

export class SolicitudesUpdateDto {
  
  @ApiProperty()
  @IsString()
  @MaxLength(50)
  TipoSolicitud: string;
  
  @ApiProperty()
  @IsOptional()
  registros: RegistrosFuncionarios;

  @ApiProperty()
  @IsOptional()
  @IsString()
  Estado?: string='pendiente';

  @ApiProperty()
  @IsOptional()
  @IsString()
  Descripcion: string;

  @ApiProperty()
  @IsOptional()
  FechaSolicitud?: Date = new Date(); 
}