import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import Image from './images';

@Entity('products')
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
  preco_final: number;
  @OneToOne(() => Image, (image) => image.product, {
    cascade: ['insert', 'update'],
  })
  image: Image;
}
