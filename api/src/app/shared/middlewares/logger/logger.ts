import {
    Injectable,
    Logger,
    LoggerService,
    Scope,
  } from '@nestjs/common';
  import { AppEndFile, FormatTime, getTimeMoment, pathStorageLogs } from 'src/app/shared';
  
  
  
  
  @Injectable({ scope: Scope.TRANSIENT })
export class AppLogger implements LoggerService {
    private context?: string;
    public logger = new Logger()
  
    public setContext(context: string): void {
      this.context = context;
      this.logger = new Logger(this.context)
  
    }
  
    log(message: string='' ) {
      AppEndFile(pathStorageLogs('log'),'log.log',`${getTimeMoment(FormatTime.fullTimeStamp)}--[${this.context}]-- ${message}`)
      this.logger.log(message)
    }
  
    warn( message: string='' ) {
      AppEndFile(pathStorageLogs('warn'),'warn.log',`${getTimeMoment(FormatTime.fullTimeStamp)}--[${this.context}]-- ${message}`)
      this.logger.warn(message)
    }
  
    error(message: string='') {
      AppEndFile(pathStorageLogs('error'),'error.log',`${getTimeMoment(FormatTime.fullTimeStamp)}--[${this.context}]-- ${message}`)
      this.logger.error(message)
    }
  
  }
  

export const logger = new AppLogger()