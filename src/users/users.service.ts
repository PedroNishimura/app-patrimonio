import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  @Inject('USERS_REPOSITORY')
  private userRepository: Repository<User>

  async createUser(createUserDto: CreateUserDto) {
    await this.userRepository.createQueryBuilder()
    .insert()
    .into(User)
    .values({
      ...createUserDto,
    })
    .execute()

    return `User has been created`;
  }

  async allUsers(): Promise<User[]> {
    const allUsers = await this.userRepository.find();

    return allUsers;
  }

  async userProfile(id: string) {
    const userProfile = await this.userRepository.findOne({
      where: { id }
    })

    return userProfile;
  }

  async editProfile(id: string, updateUserDto: UpdateUserDto) {
  
    return `User has been updated`;
  }

  async deleteUser(id: string) {

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

    return 'This action add a profile invest to a user';
  }
}
