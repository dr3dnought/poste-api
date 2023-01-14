import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAll() {
    return 'All users';
  }

  @Get(':id')
  getOneById(@Param('id') id: string) {
    return `Get one by ID: ${id}`;
  }

  @Post('create')
  create(@Body() dto: CreateUserDto) {
    return `Created user: ${dto}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return `Updating user's id: ${id}. User = ${dto}`;
  }

  @Delete(`:id`)
  delete(@Param('id') id: string) {
    return `Removing user's ${id}`;
  }
}
