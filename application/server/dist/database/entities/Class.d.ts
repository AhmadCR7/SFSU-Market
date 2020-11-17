import { BaseEntity } from 'typeorm';
import { Listing } from './Listing';
export declare class Class extends BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    major: string;
    number: number;
    listings: Listing[];
}
