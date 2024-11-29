import { Injectable } from '@nestjs/common';
import { RegisterRequestDto } from './dto/auth.dto';
import { ProfilesService } from '../profiles/profiles.service';
import { Profile } from '../profiles/entities/profile.entity';
import { DatabaseError } from '@utils/error/errors';

@Injectable()
export class AuthService {
  constructor(private readonly profilesService: ProfilesService) {}
  async register(
    registerRequestDto: RegisterRequestDto,
  ): Promise<Profile | DatabaseError> {
    // verifico l'esistenza del profilo <mail> (FindProfile)

    // Esiste?
    /**
     * -SI
     * -- Errore => Profilo già registrato
     *
     * -NO
     * -- Registro
     * -- Creo un Profilo
     
    */
    return await this.profilesService.create(registerRequestDto);
    /*
     * -- Mando la Mail
     * -- OK => Registrazione Registrata
     */
  }
}
