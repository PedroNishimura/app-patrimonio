import { IsString, IsNumber } from "class-validator"

export class CreateUserDto {
    @IsString()
    readonly cpf?: string

    @IsString()
    readonly name?: string

    @IsNumber()
    readonly age?: number

    @IsString()
    readonly sex?: string
}
