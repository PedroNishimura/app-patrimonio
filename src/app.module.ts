import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module'
import { WalletModule } from './wallet/wallet.module'
const ormConfig = require('../ormConfig.js')

@Module({
  imports: [
    UsersModule, 
    WalletModule, 
    TypeOrmModule.forRoot(ormConfig)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
