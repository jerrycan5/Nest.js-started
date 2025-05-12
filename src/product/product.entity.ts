import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  qty: number;

  @Column()
  expire_date: Date;

  @Column()
  colour: string;

  @Column()
  size: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: null,
  })
  nafdac_number: string;

  @Column()
  manufacture_date: Date;

  // @Column()
  // expiry_date: Date;

  // @Column()
  // model: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
