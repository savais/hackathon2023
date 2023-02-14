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
    // console.log(`auth.service validateUser: name: ${name} - pw: ${password}`)
    const user = await this.usersService.getUserByName(name);

    // console.log(user)
    if (user && user.password === password) {
      const result = {
        id: user.id,
        username: user.username,
        password: '',
        email: user.email,
        roles: user.roles,
        rolesAsList: User.prototype.rolesAsList
      };

      return result;
    }

    return null;
  }

  async login(user: User) {
    const payload = { name: user.username, sub: user.id };
    return { accessToken: this.jwtService.sign(payload) };
  }
}