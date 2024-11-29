import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ProfilesModule } from '../profiles/profiles.module';
import { AuthService } from './auth.service';

@Module({
  imports: [ProfilesModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
