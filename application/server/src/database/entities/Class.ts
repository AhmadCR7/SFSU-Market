import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm'
import { Listing } from './Listing'

@Entity()
// extend allows base sql commands link find() and insert()
export class Class extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @CreateDateColumn()
  createdAt = new Date()

  @UpdateDateColumn()
  updatedAt = new Date()

  @Column({ unique: true })
  name!: string

  @Column()
  major!: string

  @Column()
  number!: number

  @OneToMany(() => Listing, (listing) => listing.class)
  listings: Listing[]
}
