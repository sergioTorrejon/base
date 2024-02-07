import { BadRequestException } from '@nestjs/common';
import { CustomValidationError } from 'src/app/shared';


export class CustomValidationException extends BadRequestException {
  constructor(public validationErrors: CustomValidationError) {
    super();
  }
}
