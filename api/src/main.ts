import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { globalPipe, initSwagger, logger } from './app/shared';
import { appConfig } from './config';

const bootstrap = async () =>{
  logger.setContext(bootstrap.name)
  logger.log(`Iniciando...`)
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // CREATE APPLICATION WITH NESTJS AND EXPRESS
  initSwagger(app); //DOCUMENTATION APP WITH SWAGGER
  app.enable('trust proxy'); //ENABLED PROXY TRUST (PROXY DE CONFIANZA)
  app.enableCors(); //SETTING CORS
  app.useGlobalPipes(new ValidationPipe(globalPipe)); //SETTING PIPES
  app.enableCors();
  await app.listen(appConfig.SERVER_PORT); //RUN API REST
  logger.setContext(`RUN-APP`)
  logger.log(`API RUN http://localhost:${appConfig.SERVER_PORT}`)
  logger.log(`API VERIFY http://localhost:${appConfig.SERVER_PORT}/estado`)
}
bootstrap();
