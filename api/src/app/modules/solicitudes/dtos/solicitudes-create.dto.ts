import {
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

import {
  RegistrosFuncionarios,
} from '../../rms/registros-funcionarios/entities';

export class SolicitudesCreateDto {
  @ApiProperty()
  @IsString()
  @MaxLength(50)
  TipoSolicitud: string;
  
  @ApiProperty()
  @IsOptional()
  idRegistro: RegistrosFuncionarios;

  @ApiProperty()
  @IsOptional()
  @IsString()
  estado?: string='pendiente';

  @ApiProperty()
  @IsOptional()
  @IsString()
  Descripcion: string;

  @ApiProperty()
  @IsOptional()
  FechaSolicitud?: Date = new Date(); 
}
