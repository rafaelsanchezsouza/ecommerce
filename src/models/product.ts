import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export default class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @Column()
  categoria: string;
  @Column()
  medida: string;
  @Column()
  preço_final: number;
}
