import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { getEnv } from 'src/app.service';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService,
    private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: getEnv("JWT_SECRET"),
    });
  }

  async validate(payload: any): Promise<any> {
    console.log("jwt-validate call")
    const user = await this.userService.getUserById(payload.sub)
    return { id: payload.sub, name: payload.name, roles: user.roles };
  }
}