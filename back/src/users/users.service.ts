import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}

    async getUserByName(name: string): Promise<User> {
        return await this.usersRepository.findOne({where: {name: name}})
    }

    async getUserCount(): Promise<number> {
        return await this.usersRepository.count()
    }

    async insertUserFromDto(userDto: CreateUserDto): Promise<User> {
        const user = new User()

        user.name = userDto.name
        user.email = userDto.email
        user.password = userDto.password
        user.isAdmin = userDto.isAdmin

        return await this.usersRepository.save(user)
    }
}
