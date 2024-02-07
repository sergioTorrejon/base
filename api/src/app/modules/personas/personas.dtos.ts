import {
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { BaseDto } from 'src/app/shared';

import {
  ApiProperty,
  OmitType,
  PartialType,
} from '@nestjs/swagger';

import { Paises } from '../catalogos/paises/paises.entity';

export class PersonasCreateDto extends BaseDto {
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  tipoIdentificacion?: string;

  @ApiProperty()
  @IsString()
  @MaxLength(100)
  nroIdentificacion: string;


  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(10)
  complemento?: string;

  @ApiProperty()
  @IsOptional()
  pais?: Paises;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  @MaxLength(128)
  nombres: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  @MaxLength(128)
  primerApellido: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  segundoApellido?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  apellidoCasada?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  fechaNacimiento?:string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  genero?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  telefono?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  direccion?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  profesion?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  verificadoSegip?: string;

}

export class PersonasUpdateDto extends PartialType(
  OmitType(PersonasCreateDto, ['nroIdentificacion'] as const),
  ) {}

export class PersonasSearchDto {

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(10)
  nroIdentificacion?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(20)
  nombres?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(20)
  apellidos?: string;

  @ApiProperty()
  @IsOptional()
  empresa?: string;

}  