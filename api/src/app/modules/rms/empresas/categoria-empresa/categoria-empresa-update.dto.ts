import {
  OmitType,
  PartialType,
} from '@nestjs/swagger';

import { CategoriaEmpresaCreateDto } from './categoria-empresa-create.dto';

export class CategoriaEmpresaUpdateDto extends PartialType(
  OmitType(CategoriaEmpresaCreateDto, ['nivel','categoria',"codigo"] as const),
) {}
