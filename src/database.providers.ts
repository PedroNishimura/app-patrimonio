import { DataSource } from "typeorm";
import { UserRefactTest1674870934794 } from './migrations/1674870934794-UserRefactTest'
require('dotenv').config();

export const dataBaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.HOST_DOCKER,
        port: 3306,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: true
      });
      return dataSource.initialize();
    }
  }
]

export const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.HOST_DOCKER,
  port: 3306,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
  migrations: [UserRefactTest1674870934794]
})