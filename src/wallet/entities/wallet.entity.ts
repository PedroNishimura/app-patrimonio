import {
    BaseEntity,
    Entity,
    Unique,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['owner'])
export class Wallet extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    private id: number

    @Column({nullable: false, type: 'varchar', length: 128})
    private owner: string

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

    @Column({nullable: false, type: 'float'})
    public total_price: number
}
