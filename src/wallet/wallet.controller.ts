import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('/createWallet')
  createWallet(@Body() createWalletDto: CreateWalletDto) {
    return this.walletService.createWallet(createWalletDto);
  }

  @Get('/myWallet:id')
  myWallet(@Param('id') id: string) {
    return this.walletService.myWallet(id);
  }

  @Patch('/editWallet:id')
  editWallet(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
    return this.walletService.editWallet(id, updateWalletDto);
  }

  @Delete('/deleteWallet:id')
  deleteWallet(@Param('id') id: string) {
    return this.walletService.deleteWallet(id);
  }
}
