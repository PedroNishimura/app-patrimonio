import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './entities/wallet.entity';

@Injectable()
export class WalletService {
  constructor(@InjectRepository(Wallet) private readonly walletRepository: Repository<Wallet>) {}

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

  async myWallet(id: string) {
    const myWallet = await this.walletRepository.findOne(id)

    return myWallet;
  }

  async editWallet(id: string, updateWalletDto: UpdateWalletDto) {
    const wallet = await this.walletRepository.findOne(id)

    if (wallet) {
      await this.walletRepository.createQueryBuilder()
      .update({
        ...updateWalletDto
      })
      .where({
          id: id,
      })
      .execute()

      return `Wallet has been updated`
    } else {
      return `Wallet does not exists`
    }
  }

  async deleteWallet(id: string) {
    const wallet = await this.walletRepository.findOne(id)
    
    if (wallet) {
      await this.walletRepository.remove(wallet)
    }

    return `Wallet has been removed`;
  }
}
