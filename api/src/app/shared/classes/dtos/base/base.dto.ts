import {
    IsOptional,
    IsString,
    IsBoolean,
  } from 'class-validator';
  
  
  export class BaseDto {

  @IsBoolean()
  @IsOptional()
  Status: boolean;

  @IsString()
  @IsOptional()
  UsuarioCreacion: string = '';

  //@IsString()
  @IsOptional()
  FechaCreacion: Date = new Date();

  @IsString()
  @IsOptional()
  UsuarioModificacion: string = '';

  //@IsString()
  @IsOptional()
  FechaModificacion: Date = new Date();

  

  @IsBoolean()
  @IsOptional()
  active: boolean=true;

  @IsString()
  @IsOptional()
  userCreate: string = 'default';

  //@IsString()
  @IsOptional()
  dateCreate: Date = new Date();

  }
  