import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { CustomValidationException, FailedResponseDTO, logger } from 'src/app/shared';



@Catch(CustomValidationException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: CustomValidationException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    
    logger.setContext('CustomValidationException');
    logger.error(JSON.stringify(exception.validationErrors));

    const resp: FailedResponseDTO = {
      errorMessage: exception.message,
      errors: exception.validationErrors,
    };

    response.status(status).json(resp);
  }
}
