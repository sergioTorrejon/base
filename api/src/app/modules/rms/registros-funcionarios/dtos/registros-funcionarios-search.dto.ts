import {
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Catalogo } from 'src/app/modules/catalogos/catalogo/catalogo.entity';
import { Personas } from 'src/app/modules/personas/personas.entity';

import { ApiProperty } from '@nestjs/swagger';

export class RegistrosFuncionariosSearchDto {
  
  /* -----------IS ADMINISTRADOR--------- */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(50)
  tipoReporte?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(50)
  tipoEmpresa?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(50)
  codEmpresa?: string;

  /* ----------- DTO SEARCH --------- */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(20)
  estado?: string;

  @ApiProperty()
  @IsOptional()
  tipoCargo?: Catalogo;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(50)
  cargo?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  fechaIngreso?:string;

  @ApiProperty()
  @IsOptional()
  @MaxLength(50)
  nroIdentificacion?: string ;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(50)
  nombres?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(50)
  apellidos?: string;

/* --------------------PRUEBA------------------------ */
  @ApiProperty()
  @IsOptional()
  persona?: Personas;

}
