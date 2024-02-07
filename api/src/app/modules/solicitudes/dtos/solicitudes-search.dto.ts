import {
  IsOptional,
  IsString,
} from 'class-validator';

export class SolicitudesSearchDto {
    
    @IsOptional()
    @IsString()
    empresa?:string;
  
    @IsOptional()
    @IsString()
    estado?:string;
  
    @IsOptional()
    @IsString()
    idRegistro?:string;
  
    @IsOptional()
    @IsString()
    nro_identificacion?:string;
  
  }
  