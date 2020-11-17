"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listing = void 0;
const typeorm_1 = require("typeorm");
const Category_1 = require("./Category");
const Class_1 = require("./Class");
const ListingImage_1 = require("./ListingImage");
let Listing = class Listing extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Listing.prototype, "id", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Object)
], Listing.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Object)
], Listing.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Listing.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], Listing.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Listing.prototype, "price", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Listing.prototype, "isbn", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Category_1.Category, (category) => category.listings, { eager: true }),
    __metadata("design:type", Category_1.Category)
], Listing.prototype, "category", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Class_1.Class, (class_) => class_.listings, { eager: true }),
    __metadata("design:type", Class_1.Class)
], Listing.prototype, "class", void 0);
__decorate([
    typeorm_1.OneToMany(() => ListingImage_1.ListingImage, (listingImage) => listingImage.listing, { eager: true }),
    __metadata("design:type", Array)
], Listing.prototype, "listingImages", void 0);
Listing = __decorate([
    typeorm_1.Entity()
], Listing);
exports.Listing = Listing;
//# sourceMappingURL=Listing.js.map