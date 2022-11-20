import { Wallet } from 'src/wallet/entities/wallet.entity';
import {
    BaseEntity,
    Entity,
    Unique,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    JoinTable,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    private id: string

    @JoinTable()
    @OneToMany((type) => Wallet, (wallet) => wallet.cpfOwner)
    public cpf: string

    @CreateDateColumn()
    private createdAt: Date;
  
    @UpdateDateColumn()
    private updatedAt: Date;

    @Column({nullable: false, type: 'varchar', length: 128})
    public name: string

    @Column({nullable: false, type: 'int'})
    public age: number

    @Column({nullable: false, type: 'varchar', length: 1})
    public sex: string

    @Column({nullable: true, type: 'varchar', length: 32})
    public profile_invest:  string
}
