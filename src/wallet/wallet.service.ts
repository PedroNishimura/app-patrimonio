import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './entities/wallet.entity';

@Injectable()
export class WalletService {
  constructor(
    @Inject('WALLET_REPOSITORY')
    private walletRepository: Repository<Wallet>
  ) {}

  async createWallet(createWalletDto: CreateWalletDto) {
    await this.walletRepository.createQueryBuilder()
    .insert()
    .into(Wallet)
    .values({
      ...createWalletDto,
    })
    .execute()

    return `Wallet has been created`
  }

  async myWallet(ownerId: string) {
    const myWallet = await this.walletRepository.createQueryBuilder("wallet")
    .where("wallet.ownerId = :ownerId", { ownerId: ownerId })
    .getMany()

    return myWallet;
  }

  async editWallet(id: string, updateWalletDto: UpdateWalletDto) {

    return `Wallet has been updated`
  }

  async deleteWallet(id: string) {

    return `Wallet has been removed`;
  }
}
