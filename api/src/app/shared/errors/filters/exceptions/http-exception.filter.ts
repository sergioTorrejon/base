import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { logger } from 'src/app/shared';
import { FailedResponseDTO } from 'src/app/shared/classes';


    //TODO: REVISAR SI SE PUEDE MEJORAR
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    logger.setContext('HttpException');

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    logger.error(JSON.stringify(exception.message));
    const resp: FailedResponseDTO = {
      errorMessage: exception.message,
    };

    response.status(status).json(resp);
  }
}