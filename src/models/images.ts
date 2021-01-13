import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Product from './product';

@Entity('productImages')
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  path: string;
  @OneToOne(() => Product, (product) => product.image)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
