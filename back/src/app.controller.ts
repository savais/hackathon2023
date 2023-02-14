import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBasicAuth, ApiOkResponse, ApiOperation, ApiResponse, ApiSecurity, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
    ) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiOperation({ summary: "Log the user in" })
  @ApiBasicAuth()
  @ApiOkResponse({ description: "Returns accesstoken, when logged in successfully" })
  @ApiUnauthorizedResponse({description: "Packet not found for used id"})
  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    // console.log(req.user)
    const token = this.authService.login(req.user);
    return token;
  }
}
