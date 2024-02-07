import {
  applyDecorators,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/app/auth/guard/jwt-auth.guard';

export const Auth=() => {
  return applyDecorators(
    UseGuards(JwtAuthGuard),
    ApiBearerAuth(),
  );
}
