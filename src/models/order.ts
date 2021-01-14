import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order')
export default class Order {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @Column()
  address: string;
  @Column()
  contact: number;
  @Column()
  delivery: boolean;
  @Column()
  products: number;
}
