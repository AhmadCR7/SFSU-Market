import { BaseEntity } from 'typeorm';
import { User } from './User';
export declare class Message extends BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    body: string;
    sender: User;
    receiver: User;
}
