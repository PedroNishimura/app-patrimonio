import { IsString, IsNumber } from "class-validator"

export class CreateUserDto {
    @IsNumber()
    readonly cpf: number

    @IsString()
    readonly name: string

    @IsNumber()
    readonly age: number

    @IsString()
    readonly sex: string

    @IsString()
    readonly profile_invest: string
}
