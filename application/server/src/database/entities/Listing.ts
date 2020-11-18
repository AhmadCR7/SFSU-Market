import { integer } from 'aws-sdk/clients/cloudfront'
import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
} from 'typeorm'
import { Category } from './Category'
import { Class } from './Class'
import { ListingImage } from './ListingImage'

@Entity()
// extend allows base sql commands link find() and insert()
export class Listing extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @CreateDateColumn()
  createdAt = new Date()

  @UpdateDateColumn()
  updatedAt = new Date()

  @Column()
  title!: string

  @Column({ type: 'text' })
  description: string

  @Column()
  price: integer

  @Column()
  isbn: string

  @ManyToOne(() => Category, (category) => category.listings, { eager: true })
  category!: Category

  @ManyToOne(() => Class, (class_) => class_.listings, { eager: true })
  class: Class

  @OneToMany(() => ListingImage, (listingImage) => listingImage.listing, { eager: true })
  listingImages: ListingImage[]
}
