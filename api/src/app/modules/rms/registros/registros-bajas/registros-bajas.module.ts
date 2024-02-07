import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Empresas } from '../../empresas/empresas.entity';
import { EmpresasService } from '../../empresas/empresas.service';
import { RegistrosFuncionarios } from '../../registros-funcionarios/entities';
import {
  RegistrosFuncionariosService,
} from '../../registros-funcionarios/registros-funcionarios.service';
import { RegistrosBajas } from './entities';
import { RegistrosBajasController } from './registros-bajas.controller';
import { RegistrosBajasService } from './registros-bajas.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegistrosBajas,RegistrosFuncionarios,Empresas])],
  controllers: [RegistrosBajasController],
  providers: [RegistrosBajasService, RegistrosFuncionariosService,
    EmpresasService ],
  exports: [RegistrosBajasService],
})
export class RegistrosBajasModule {}
