import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { AppService } from './app.service';
import { ResDto } from './app/shared';

interface token{
  access_token:string;
  token_type:string;
  expires_in:number;
  refresh_token:string;
  check_refresh_token:number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
  ) {}

  @Get('estado')
  getStatus(): ResDto {
    return this.appService.getStatus();
  }

  @Post('token')
  getToken(@Body() data: any): token {
    console.log('data token');
    console.log(data);
    if (data.usuario == 'administrador'){
      let t : token = { 
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0ODFjYmFkYi1kOGZiLTQzOWYtODY3Yi1hNDFkZTM5M2M4OGQiLCJzdWIiOiJqbWFtYW5pIiwidXNlcm5hbWUiOiJqbWFtYW5pIiwidWlkIjoyNTAsImNvbXBhbnkiOiJBUFMiLCJyb2xlIjpbImFkbWluaXN0cmFkb3IiXSwibmJmIjoxNjY3OTY4NTUwLCJpc3MiOiJsb2NhbGhvc3QiLCJhdWQiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NzgwNzcxMzksImV4cCI6MTcwOTYxMzEzOX0.OPsatts7sC60tD9ySkS1eaFBf3bcWam9-PeTeTH4dag",
        token_type: "Bearer",
        expires_in: 3600,
        refresh_token: "t9+dHoI9JkWaEaLD69Gamg==",
        check_refresh_token: 60
      }
      return t;
    }
    else if (data.usuario == 'operador_funcionarios_101'){
      let t : token = { 
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0ODFjYmFkYi1kOGZiLTQzOWYtODY3Yi1hNDFkZTM5M2M4OGQiLCJzdWIiOiJqbWFtYW5pIiwidXNlcm5hbWUiOiJqbWFtYW5pIiwidWlkIjoyNTAsImNvbXBhbnkiOiIxMDEiLCJyb2xlIjpbIm9wZXJhZG9yX2Z1bmNpb25hcmlvcyJdLCJuYmYiOjE2Njc5Njg1NTAsImlzcyI6ImxvY2FsaG9zdCIsImF1ZCI6ImxvY2FsaG9zdCIsImlhdCI6MTY3ODA3NzM1OCwiZXhwIjoxNzA5NjEzMzU4fQ.Ha76_YFgFzbfWvlmyZJn0i8DMeF6BNmNaCnehqG4QRA",
        token_type: "Bearer",
        expires_in: 3600,
        refresh_token: "t9+dHoI9JkWaEaLD69Gamg==",
        check_refresh_token: 60
      }
      return t;
    }
    else if (data.usuario == 'operador_funcionarios_109'){
      let t : token = { 
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0ODFjYmFkYi1kOGZiLTQzOWYtODY3Yi1hNDFkZTM5M2M4OGQiLCJzdWIiOiJqbWFtYW5pIiwidXNlcm5hbWUiOiJqbWFtYW5pIiwidWlkIjoyNTAsImNvbXBhbnkiOiIxMDkiLCJyb2xlIjpbIm9wZXJhZG9yX2Z1bmNpb25hcmlvcyJdLCJuYmYiOjE2Njc5Njg1NTAsImlzcyI6ImxvY2FsaG9zdCIsImF1ZCI6ImxvY2FsaG9zdCIsImlhdCI6MTY3ODA3ODI4NSwiZXhwIjoxNzA5NjE0Mjg1fQ.QkeocSUkzczS2fOBPCsWpdDQ1PCIl4AJ-KjCuIQCD50",
        token_type: "Bearer",
        expires_in: 3600,
        refresh_token: "t9+dHoI9JkWaEaLD69Gamg==",
        check_refresh_token: 60
      }
      return t;
    }
    else if (data.usuario == 'consulta_funcionarios_101'){
      let t : token = { 
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0ODFjYmFkYi1kOGZiLTQzOWYtODY3Yi1hNDFkZTM5M2M4OGQiLCJzdWIiOiJqbWFtYW5pIiwidXNlcm5hbWUiOiJqbWFtYW5pIiwidWlkIjoyNTAsImNvbXBhbnkiOiIxMDEiLCJyb2xlIjpbImNvbnN1bHRhX2Z1bmNpb25hcmlvcyJdLCJuYmYiOjE2Njc5Njg1NTAsImlzcyI6ImxvY2FsaG9zdCIsImF1ZCI6ImxvY2FsaG9zdCIsImlhdCI6MTY3ODA3ODMyNywiZXhwIjoxNzA5NjE0MzI3fQ.6LhLgk8t8NH6JvbMi6rGs4mpHqyHx4XyGBAhFNfcEbQ",
        token_type: "Bearer",
        expires_in: 3600,
        refresh_token: "t9+dHoI9JkWaEaLD69Gamg==",
        check_refresh_token: 60
      }
      return t;
    }
    else{
      let t : token = { 
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0ODFjYmFkYi1kOGZiLTQzOWYtODY3Yi1hNDFkZTM5M2M4OGQiLCJzdWIiOiJqbWFtYW5pIiwidXNlcm5hbWUiOiJqbWFtYW5pIiwidWlkIjoyNTAsImNvbXBhbnkiOiJBUFMiLCJyb2xlIjpbImFkbWluaXN0cmFkb3IiXSwibmJmIjoxNjY3OTY4NTUwLCJpc3MiOiJsb2NhbGhvc3QiLCJhdWQiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NzgwNzcxMzksImV4cCI6MTcwOTYxMzEzOX0.OPsatts7sC60tD9ySkS1eaFBf3bcWam9-PeTeTH4dag",
        token_type: "Bearer",
        expires_in: 3600,
        refresh_token: "t9+dHoI9JkWaEaLD69Gamg==",
        check_refresh_token: 60
      }
      return t;
    }
  }


}
