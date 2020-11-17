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
  sender: User

  @ManyToOne(() => User, (user) => user.receivedMessages, { eager: true })
  receiver: User
}
