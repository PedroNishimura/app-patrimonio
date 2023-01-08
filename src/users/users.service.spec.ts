import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection, getRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>; //ENTENDER MELHOR ISSO

const createMockRepository = <T = any> (): MockRepository<T> => ({
  findOne: jest.fn()
})

describe('UsersService', () => {
  let service: UsersService;
  let userRepository: MockRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {provide: Connection, useValue: {}},
        {provide: getRepositoryToken(User), useValue: createMockRepository()}
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get<MockRepository>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('userProfile', () => {
    describe('Buscar usuário pelo ID', () => {
      it('Deve retornar o objeto user', async () => {
        const userId = '1';
        const expectReturn = {};

        userRepository.findOne.mockReturnValue(expectReturn)
        const user = await service.userProfile(userId);
        expect(user).toEqual(expectReturn);
      });
    });
  });
});
