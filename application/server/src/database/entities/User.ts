import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm'
import { Message } from './Message'

@Entity()
// extend allows base sql commands link find() and insert()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @CreateDateColumn()
  createdAt = new Date()

  @UpdateDateColumn()
  updatedAt = new Date()

  @Column({ unique: true })
  email!: string

  @Column()
  password!: string

  @OneToMany(() => Message, (message) => message.sender)
  sentMessages: Message[]

  @OneToMany(() => Message, (message) => message.receiver)
  receivedMessages: Message[]
}
