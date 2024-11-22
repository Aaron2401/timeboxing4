import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string) {
    return this.userService.validateUser(email, password);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
