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
@Unique(['cpf'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    private id: number

    @Column({nullable: false, type: 'varchar', length: 11})
    private cpf: string

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

    @Column({nullable: false, type: 'varchar', length: 32})
    public profile_invest:  string
}
