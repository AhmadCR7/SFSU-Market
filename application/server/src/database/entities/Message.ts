import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm'
import { Listing } from './Listing'
import { User } from './User'

@Entity()
// extend allows base sql commands link find() and insert()
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @CreateDateColumn()
  createdAt = new Date()

  @UpdateDateColumn()
  updatedAt = new Date()

  @Column({ type: 'text' })
  body!: string

  @ManyToOne(() => User, (user) => user.sentMessages, { eager: true })
  sender!: User

  @ManyToOne(() => User, (user) => user.receivedMessages, { eager: true })
  receiver!: User

  @ManyToOne(() => Listing, (listing) => listing.messages, {
    onDelete: 'CASCADE',
  })
  listing!: Listing
}
