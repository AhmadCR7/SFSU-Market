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
import { Message } from './Message'
import { User } from './User'

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

  @Column({ type: 'boolean' })
  verified!: boolean

  @Column({ type: 'boolean' })
  locked!: boolean

  @Column()
  price: integer

  @Column()
  isbn: string

  @ManyToOne(() => Category, (category) => category.listings, { eager: true })
  category!: Category

  @ManyToOne(() => Class, (class_) => class_.listings, { eager: true })
  class: Class

  @ManyToOne(() => User, (user) => user.listings)
  poster!: User

  @OneToMany(() => ListingImage, (listingImage) => listingImage.listing, { eager: true })
  listingImages: ListingImage[]

  @OneToMany(() => Message, (message) => message.listing)
  messages: Message[]
}
