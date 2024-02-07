import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RegistrosFuncionarios } from '../rms/registros-funcionarios/entities';
import { Solicitudes } from './entities';
import { SolicitudesController } from './solicitudes.controller';
import { SolicitudesService } from './solicitudes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Solicitudes,RegistrosFuncionarios])],
  controllers: [SolicitudesController],
  exports: [SolicitudesService],
  providers: [SolicitudesService],
})
export class SolicitudesModule {}
