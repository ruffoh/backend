import { Injectable } from '@nestjs/common';
import { RegisterRequestDto } from '../auth/dto/auth.dto';
import { ProfilesRepository } from './profile.repository';

@Injectable()
export class ProfilesService {
  constructor(private readonly profilesRepository: ProfilesRepository) {}
  findOneByEmail(email: string) {
    /**
     * Cerco su DB il profilo con questa email
     * Se lo trovo ritorno il profilo
     *
     * Se non lo trovo => errore
     *
     */
  }
  create(registerRequestDto: RegisterRequestDto) {
    this.profilesRepository.create(registerRequestDto);
    console.log(registerRequestDto);
  }
}
