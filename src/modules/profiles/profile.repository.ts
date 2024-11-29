import { Injectable } from '@nestjs/common';
import { RegisterRequestDto } from '../auth/dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class ProfilesRepository {
  constructor(
    @InjectRepository(Profile)
    private readonly dbConnection: MongoRepository<Profile>,
  ) {}

  create(registerRequestDto: RegisterRequestDto) {
    this.dbConnection.save({
      email: registerRequestDto.email,
      password: registerRequestDto.password,
      username: registerRequestDto.username,
    });
  }
}
