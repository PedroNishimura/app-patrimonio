import { IsString } from "class-validator"

export class CreateWalletDto {
    @IsString()
    readonly owner: string

    @IsString()
    readonly name: string

    @IsString()
    readonly description: string

    @IsString()
    readonly type_invest: string
}
