import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
    console.log('UserController created');
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.userService.findOne(id);
  }

  @Post('filter')
  createFilter(@Body() createUserDto: CreateUserDto) {
    console.log('< controller::users/filter >');
    return this.userService.createFilter(createUserDto);
  }

  @Post('interceptor')
  createInterceptor(@Body() createUserDto: CreateUserDto) {
    console.log('< controller::users/interceptor >');
    return this.userService.createInterceptor(createUserDto);
  }
}
