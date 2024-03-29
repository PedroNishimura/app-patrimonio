import { PartialType } from '@nestjs/mapped-types'
import { CreateWalletDto } from './create-wallet.dto'
import { IsNumber } from "class-validator"

export class UpdateWalletDto extends PartialType(CreateWalletDto) {
    @IsNumber()
    readonly total_price: number
}