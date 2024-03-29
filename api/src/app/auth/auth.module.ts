import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { appConfig } from 'src/config';

import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: appConfig.JWT_SECRET,
      signOptions: { expiresIn: '60m' }
    }),
    
  ],
  controllers: [],
  providers: [ JwtStrategy],
})
export class AuthModule {}
