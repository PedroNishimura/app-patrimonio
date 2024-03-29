import { User } from '../../users/entities/user.entity';
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinTable,
    ManyToOne,
} from 'typeorm';

@Entity()
export class Wallet extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    private id: number

    @JoinTable()
    @ManyToOne((type) => User, (user) => user.id)
    public owner: string

    @CreateDateColumn()
    private createdAt: Date;
  
    @UpdateDateColumn()
    private updatedAt: Date;

    @Column({nullable: false, type: 'varchar', length: 128})
    public name: string

    @Column({nullable: false, type: 'varchar', length: 256})
    public description: string

    @Column({nullable: false, type: 'varchar', length: 32})
    public type_invest: string

    @Column({nullable: true, type: 'float'})
    public total_price: number
}
