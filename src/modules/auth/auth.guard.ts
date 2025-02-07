import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from './auth.decorator';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
  ) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // se la rotta in qualche modo è pubblica non continuo a validare ma ritorno true

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    if (!request.headers.authorization) {
      throw new UnauthorizedException();
      //  'il tuo header non contiene authorization sfigato non puoi',
    }
    const token = request.headers.authorization.replace('Bearer ', '');
    // console.log(token);
    try {
      (request as any).user = this.jwtService.verify(token);
      this.jwtService.verify(token);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
    return true;
  }
}
