import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  createUser(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  allUsers() {
    return `This action returns all users`;
  }

  userProfile(id: string) {
    return `This action returns a #${id} user`;
  }

  editProfile(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  deleteUser(id: string) {
    return `This action removes a #${id} user`;
  }

  createProfileInvest(id: string, profile: string) {
    return 'This action add a profile invest to a user'
  }
}
