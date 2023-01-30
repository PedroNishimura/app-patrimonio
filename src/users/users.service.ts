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
    const user = await this.userRepository.create({
      ...createUserDto
    });

    return this.userRepository.save(user);
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
    const user = await this.userRepository.preload({
      id,
      ...updateUserDto
    });

    return this.userRepository.save(user);
  }

  async deleteUser(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    return this.userRepository.remove(user);
  }

  async createProfileInvest(id: string, profile: string) {
    const user = await this.userRepository.preload({
      id,
      profile_invest: profile,
    });

    return this.userRepository.save(user);
  } //FAZER O TESTE DEPOIS
}
