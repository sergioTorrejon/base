import { Injectable } from '@nestjs/common';

import {
  ResDto,
  responseSuccess,
} from './app/shared';

@Injectable()
export class AppService {

  getStatus(): ResDto {
    return responseSuccess('El servicio se encuentra activo!!!');
  }

}