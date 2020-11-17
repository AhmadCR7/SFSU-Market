import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseEntity } from 'typeorm';
import { Category } from './Category';
import { Class } from './Class';
import { ListingImage } from './ListingImage';
export declare class Listing extends BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string;
    price: integer;
    isbn: string;
    category: Category;
    class: Class;
    listingImages: ListingImage[];
}
