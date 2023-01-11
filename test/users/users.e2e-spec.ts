import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { UsersModule } from '../../src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('Users: /users', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        UsersModule,
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'mysqldbtest',
          port: 3307,
          username: 'root',
          password: 'mySqlAdm',
          database: 'myWalletTest',
          autoLoadEntities: true,
          synchronize: true
        })
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it.todo('Create POST /users');
});