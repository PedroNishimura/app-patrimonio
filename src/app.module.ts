import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmConfig } from './config/typeorm.config'
import { UsersModule } from './users/users.module'
import { WalletModule } from './wallet/wallet.module'

@Module({
  imports: [
    UsersModule, 
    WalletModule, 
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
