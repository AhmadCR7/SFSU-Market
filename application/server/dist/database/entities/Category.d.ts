import { BaseEntity } from 'typeorm';
import { Listing } from './Listing';
export declare class Category extends BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    listings: Listing[];
}
