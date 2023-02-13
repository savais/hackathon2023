import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(name: string, password: string): Promise<User> {
    const user = await this.usersService.getUserByName(name);

    if (user && user.password === password) {
      const result = {
        id: user.id,
        name: user.name,
        password: '',
        email: user.email,
        isAdmin: user.isAdmin
      };

      return result;
    }

    return null;
  }

  async login(user: User) {
    const payload = { name: user.name, sub: user.id };
    return { accessToken: this.jwtService.sign(payload) };
  }
}