import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection, getRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let id;
  let date;

  beforeEach(async () => {
    service = new UsersService();
    id = '9d5c94ed-2661-43dc-a4f7-e653eeb2784f';
    date = new Date();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const expectOutput = {
      id,
      name: 'Pedro',
      cpf: '43344680803',
      age: 21,
      sex: 'M',
      createdAt: date
    };

    const mockUserRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutput)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutput)),
    };

    //@ts-expect-error defined part of methods
    service['userRepository'] = mockUserRepository;

    const createUserDto: CreateUserDto = {
      cpf: '77712345600',
      name: 'Maria Clara',
      age: 10,
      sex: 'F'
    };

    const newUser = await service.createUser(createUserDto);

    expect(mockUserRepository.save).toHaveBeenCalled();
    expect(expectOutput).toStrictEqual(newUser);
  });

  it('should list users', async () => {
    const expectOutput = [
      {
        id,
        name: 'Pedro',
        cpf: '43344680803',
        age: 21,
        sex: 'M',
        createdAt: date
      }
    ];

    const mockUserRepository = {
      allUsers: jest.fn().mockReturnValue(Promise.resolve(expectOutput)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectOutput)),
    };

    //@ts-expect-error defined part of methods
    service['userRepository'] = mockUserRepository;

    const users = await service.allUsers();

    expect(mockUserRepository.find).toHaveBeenCalled();
    expect(expectOutput).toStrictEqual(users);
  });

  it('should get a user', async () => {
    const expectOutput = [
      {
        id,
        name: 'Pedro',
        cpf: '43344680803',
        age: 21,
        sex: 'M',
        createdAt: date
      }
    ];

    const mockUserRepository = {
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutput))
    };

    //@ts-expect-error defined part of methods
    service['userRepository'] = mockUserRepository;

    const user = await service.userProfile(id);

    expect(mockUserRepository.findOne).toHaveBeenCalled();
    expect(expectOutput).toStrictEqual(user);
  });

  it('should updates a user', async () => {
    const expectOutput = {
      id,
      name: 'Pedro',
      cpf: '43344680803',
      age: 21,
      sex: 'M',
      createdAt: date
    };

    const mockUserRepository = {
      editProfile: jest.fn().mockReturnValue(Promise.resolve(expectOutput)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutput)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectOutput)),
    };

    //@ts-expect-error defined part of methods
    service['userRepository'] = mockUserRepository;

    const updateUserDto: UpdateUserDto = {
      cpf: '77712345600',
      name: 'Maria Clara',
      age: 10,
      sex: 'F'
    };

    const user = await service.editProfile(id, updateUserDto);

    expect(mockUserRepository.save).toHaveBeenCalled();
    expect(expectOutput).toStrictEqual(user);
  });

  it('should delete a user', async () => {
    const expectOutput = [
      {
        id,
        name: 'Pedro',
        cpf: '43344680803',
        age: 21,
        sex: 'M',
        createdAt: date
      }
    ];

    const mockUserRepository = {
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutput)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectOutput)),
    };

    //@ts-expect-error defined part of methods
    service['userRepository'] = mockUserRepository;

    const user = await service.deleteUser(id);

    expect(mockUserRepository.remove).toHaveBeenCalled();
    expect(expectOutput).toStrictEqual(user);
  });

  it('should create a profile invest', async () => {
    const expectOutput = {
      id,
      name: 'Pedro',
      cpf: '43344680803',
      age: 21,
      sex: 'M',
      createdAt: date
    };

    const mockUserRepository = {
      createProfileInvest: jest.fn().mockReturnValue(Promise.resolve(expectOutput)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutput)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectOutput)),
    };

    //@ts-expect-error defined part of methods
    service['userRepository'] = mockUserRepository;

    const user = await service.createProfileInvest(id, 'CONSERVADOR');

    expect(mockUserRepository.save).toHaveBeenCalled();
    expect(expectOutput).toStrictEqual(user);
  });
});
