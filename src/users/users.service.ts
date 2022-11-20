import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async createUser(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto)
    await this.userRepository.save(newUser)

    return `User has been created`
  }

  async allUsers() {
    const allUsers = await this.userRepository.find()

    return allUsers
  }

  async userProfile(id: string) {
    const userProfile = await this.userRepository.findOne(id)

    return userProfile
  }

  async editProfile(id: string, updateUserDto: UpdateUserDto) {
    await this.userRepository.createQueryBuilder()
    .update({
      ...updateUserDto
    })
    .where({
        id: id,
    })
    .execute()

    return `User has been updated`
  }

  async deleteUser(id: string) {
    const deleteUser = await this.userRepository.findOne(id)
    
    if (deleteUser) {
      this.userRepository.remove(deleteUser)
    }

    return `User has been removed`;
  }

  async createProfileInvest(id: string, profile: string) {
    await this.userRepository.createQueryBuilder()
    .update({
        profile_invest: profile,
    })
    .where({
        id: id,
    })
    .execute()

    return 'This action add a profile invest to a user'
  }
}
