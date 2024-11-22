import { Injectable } from '@nestjs/common';
import { RegisterRequestDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  register(RegisterRequestDto: RegisterRequestDto) {
    return 'ti sei registrato';
  }
}
