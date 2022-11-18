import { IsString, IsNumber } from "class-validator"

export class CreateUserDto {
    //@IsString()
    //readonly id: string

    @IsString()
    readonly cpf: string

    @IsString()
    readonly name: string

    @IsNumber()
    readonly age: number

    @IsString()
    readonly sex: string

    //@IsString()
    //readonly profile_invest: string
}
