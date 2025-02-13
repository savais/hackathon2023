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
        console.log("getUserByName")
        return await this.usersRepository.findOne({where: {username: name}})
    }

    async getUserById(id: number): Promise<User> {
        return await this.usersRepository.findOne({where:{id:id}})
    }

    async getUserCount(): Promise<number> {
        return await this.usersRepository.count()
    }

    async insertUserFromDto(userDto: CreateUserDto): Promise<User> {
        const user = new User()

        user.username = userDto.username
        user.email = userDto.email
        user.password = userDto.password
        user.roles = userDto.roles.toString()

        return await this.usersRepository.save(user)
    }

    async getAllUsers(): Promise<User[]> {
        return await this.usersRepository.find()
    }
}
