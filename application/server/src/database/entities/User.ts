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
import { Message } from './Message'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @CreateDateColumn()
  createdAt = new Date()

  @UpdateDateColumn()
  updatedAt = new Date()

  @Column({ unique: true })
  email!: string

  @Column({ type: 'boolean', default: false })
  admin!: boolean

  @Column({ type: 'boolean', default: false })
  banned!: boolean

  @Column()
  password!: string

  @OneToMany(() => Message, (message) => message.sender)
  sentMessages: Message[]

  @OneToMany(() => Message, (message) => message.receiver)
  receivedMessages: Message[]

  @OneToMany(() => Listing, (listing) => listing.poster)
  listings: Listing[]
}
