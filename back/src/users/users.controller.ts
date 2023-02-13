import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
    UnauthorizedException,
    UseGuards,
  } from '@nestjs/common';
  import { UsersService } from './users.service';
  import { User } from './entities/user.entity';
  import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
  import {
    ApiBearerAuth,
    ApiNotFoundResponse,
    ApiOperation,
    ApiParam,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

let createUserWithoutAuth = true

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post('/first')
    @HttpCode(201)
    @ApiOperation({ summary: 'Create the first user with an embedded profile without authcheck' })
    @ApiResponse({
      status: 201,
      description: 'The user and profile have been successfully created.',
      type: User,
    })
    async createFirstUser(
      @Body() createUser: CreateUserDto,
    ): Promise<User> {
      if(!createUserWithoutAuth) {
          throw new UnauthorizedException()
      }
  
      if((await this.usersService.getUserCount()) > 0) {
          throw new UnauthorizedException()
      }
      

      createUser.isAdmin = true;

      return await this.usersService.insertUserFromDto(createUser);
    }
}
