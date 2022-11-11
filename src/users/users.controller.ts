import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/createUser')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get('/allUsers')
  allUsers() {
    return this.usersService.allUsers()
  }

  @Get('/userProfile:id')
  userProfile(@Param('id') id: string) {
    return this.usersService.userProfile(id)
  }

  @Patch('/editProfile:id')
  editProfile(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.editProfile(id, updateUserDto)
  }

  @Delete('/deleteUser:id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id)
  }

  @Post('/createProfileInvest:id')
  createProfileInvest(@Param('id') id: string, @Body('profile') profile: string) {
    return this.usersService.createProfileInvest(id, profile)
  }
}
