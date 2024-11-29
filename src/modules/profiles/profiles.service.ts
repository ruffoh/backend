import { Injectable } from '@nestjs/common';
import { RegisterRequestDto } from '../auth/dto/auth.dto';

@Injectable()
export class ProfilesService {
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
    console.log(registerRequestDto);
  }
}
