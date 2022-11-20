import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Wallet])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
