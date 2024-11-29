import { Injectable } from '@nestjs/common';
import { RegisterRequestDto } from '../auth/dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { MongoRepository } from 'typeorm';
import { DatabaseError } from '@utils/error/errors';

@Injectable()
export class ProfilesRepository {
  constructor(
    @InjectRepository(Profile)
    private readonly dbConnection: MongoRepository<Profile>,
  ) {}

  async create(
    registerRequestDto: RegisterRequestDto,
  ): Promise<Profile | DatabaseError> {
    try {
      return await this.dbConnection.save({
        email: registerRequestDto.email,
        password: registerRequestDto.password,
        username: registerRequestDto.username,
      });
    } catch (cause) {
      console.log(cause);
      return new DatabaseError('MariaDb non funziona / salvataggio profilo', {
        cause,
      });
    }
  }
}
