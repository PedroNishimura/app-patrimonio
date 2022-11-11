import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletService {
  createWallet(createWalletDto: CreateWalletDto) {
    return 'This action adds a new wallet';
  }

  myWallet(id: number) {
    return `This action returns a #${id} wallet`;
  }

  editWallet(id: number, updateWalletDto: UpdateWalletDto) {
    return `This action updates a #${id} wallet`;
  }

  deleteWallet(id: number) {
    return `This action removes a #${id} wallet`;
  }
}
