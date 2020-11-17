import { BaseEntity } from 'typeorm';
import { Listing } from './Listing';
export declare class ListingImage extends BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    url: string;
    listing: Listing;
}
