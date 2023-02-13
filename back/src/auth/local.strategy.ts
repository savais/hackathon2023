import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(name: string, password: string): Promise<User> {
    console.log(`login attempt: name: ${name} - pw: ${password}`)
    const user = await this.authService.validateUser(name, password);
    // console.log(user)
    if (!user) {
      throw new UnauthorizedException('User or password not found');
    }

    return user;
  }
}
