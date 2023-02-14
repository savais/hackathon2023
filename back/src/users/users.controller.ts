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
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';

let createUserWithoutAuth = true

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post('first')
    @HttpCode(201)
    @ApiOperation({ summary: 'Create the first user without authcheck' })
    @ApiResponse({
      status: 201,
      description: 'The user has been successfully created.',
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
      

      createUser.roles = ['admin', 'user'];

      return await this.usersService.insertUserFromDto(createUser);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    // @Roles(Role.Admin)
    @HttpCode(201)
    @ApiOperation({ summary: 'Create user' })
    @ApiBearerAuth()
    @ApiResponse({
      status: 201,
      description: 'The user has been successfully created.',
      type: User,
    })
    async createUser(@Body() createUser: CreateUserDto): Promise<User> {
      createUser.roles = ['admin', 'user'];
      return await this.usersService.insertUserFromDto(createUser)
    }

    @Get()
    @HttpCode(200)
    @ApiOperation({summary: 'Fetch all users'})
    @ApiResponse({
      status: 200,
      description: 'Users fetched successfully',
      type: User,
      isArray: true
    })

    async getAllUsers():Promise<User[]> {
      return await this.usersService.getAllUsers()
    }
}
