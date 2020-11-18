import { BaseEntity } from 'typeorm';
import { Message } from './Message';
export declare class User extends BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    password: string;
    sentMessages: Message[];
    receivedMessages: Message[];
}
