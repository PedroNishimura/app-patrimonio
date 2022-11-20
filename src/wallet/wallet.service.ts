import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './entities/wallet.entity';

@Injectable()
export class WalletService {
  constructor(@InjectRepository(Wallet) private readonly walletRepository: Repository<Wallet>) {}

  createWallet(createWalletDto: CreateWalletDto) {
    return 'This action adds a new wallet';
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
