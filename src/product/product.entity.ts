import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
} from 'typeorm';

@Entity('products')
export class product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  qty: number;

  @Column()
  expire_date: Date;

  @Column()
  color: string;

  @CreateDateColumn()
  createdate: Date;

  @UpdateDateColumn()
  updatedate: Date;

  @DeleteDateColumn()
  deletedate: Date;
}
