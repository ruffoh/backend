import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ProfilesModule } from '../profiles/profiles.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: 'coglione1',
      signOptions: { algorithm: 'HS256', expiresIn: 300 },
    }),
    ProfilesModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, { provide: APP_GUARD, useClass: AuthGuard }],
})
export class AuthModule {}
