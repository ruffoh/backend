import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ProfilesModule } from '../profiles/profiles.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: '',
      type: 'mongodb',
      database: 'giacomo-ruffoni-corso',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProfilesModule,
    AuthModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
