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

  async myWallet(id: number) {
    const myWallet = await this.walletRepository.find({
      relations: ['user']
    })

    return `This action returns a #${id} wallet`;
  }

  editWallet(id: number, updateWalletDto: UpdateWalletDto) {
    return `This action updates a #${id} wallet`;
  }

  deleteWallet(id: number) {
    return `This action removes a #${id} wallet`;
  }
}
