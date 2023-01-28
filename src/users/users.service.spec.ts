import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection, getRepository, Repository } from 'typeorm';
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

  /*describe('userProfile', () => {
    it('Deve retornar o objeto user', async () => {
      const userId = '1';
      const expectReturn = {};

      userRepository.findOne.mockReturnValue(expectReturn);
      const user = await service.userProfile(userId);
      expect(user).toEqual(expectReturn);
    });

    it('Deve retornar NotFoundException', async () => {
      const userId = '1';
      userRepository.findOne.mockReturnValue(undefined);

      try {
        await service.userProfile(userId);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });*/
});
