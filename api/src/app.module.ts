import { dbConfig } from 'src/config';

import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import {
  TypeOrmModule,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/auth/auth.module';
import {
  CatalogoModule,
} from './app/modules/catalogos/catalogo/catalogo.module';
import {
  CiudadesMunicipiosModule,
} from './app/modules/catalogos/ciudades_municipios/ciudades_municipios.module';
import {
  EstadosDepartamentosModule,
} from './app/modules/catalogos/estados_departamentos/estados_departamentos.module';
import { PaisesModule } from './app/modules/catalogos/paises/paises.module';
import { PersonasModule } from './app/modules/personas/personas.module';
import {
  CategoriaEmpresaModule,
} from './app/modules/rms/empresas/categoria-empresa/categoria-empresa.module';
import { EmpresasModule } from './app/modules/rms/empresas/empresas.module';
import {
  RegistrosFuncionariosModule,
} from './app/modules/rms/registros-funcionarios/registros-funcionarios.module';
import {
  RegistrosBajasModule,
} from './app/modules/rms/registros/registros-bajas/registros-bajas.module';
import {
  SolicitudesModule,
} from './app/modules/solicitudes/solicitudes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig as TypeOrmModuleOptions),
    HttpModule,
    AuthModule,
    PersonasModule,
    EmpresasModule,
    CategoriaEmpresaModule,
    CatalogoModule,
    RegistrosFuncionariosModule,
    RegistrosBajasModule,
    PaisesModule,
    CiudadesMunicipiosModule,
    EstadosDepartamentosModule,
    SolicitudesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
