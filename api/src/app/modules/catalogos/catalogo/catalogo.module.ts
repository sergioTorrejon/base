import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  CategoriaEmpresa,
} from '../../rms/empresas/categoria-empresa/categoria-empresa.entity';
import {
  CategoriaEmpresaService,
} from '../../rms/empresas/categoria-empresa/categoria-empresa.service';
import { Paises } from '../paises/paises.entity';
import { PaisesService } from '../paises/paises.service';
import { CatalogoController } from './catalogo.controller';
import { Catalogo } from './catalogo.entity';
import { CatalogoService } from './catalogo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Catalogo,CategoriaEmpresa,Paises])],
  controllers: [CatalogoController],
  providers: [CatalogoService, CategoriaEmpresaService, PaisesService],
  exports: [CatalogoService],
})
export class CatalogoModule {}
