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
import { Listing } from './Listing'

@Entity()
// extend allows base sql commands link find() and insert()
export class ListingImage extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @CreateDateColumn()
  createdAt = new Date()

  @UpdateDateColumn()
  updatedAt = new Date()

  @Column()
  name!: string

  @Column()
  url!: string

  @ManyToOne(() => Listing, (listing) => listing.listingImages)
  listing: Listing
}
