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
exports.Class = void 0;
const typeorm_1 = require("typeorm");
const Listing_1 = require("./Listing");
let Class = class Class extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Class.prototype, "id", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Object)
], Class.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Object)
], Class.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], Class.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Class.prototype, "major", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Class.prototype, "number", void 0);
__decorate([
    typeorm_1.OneToMany(() => Listing_1.Listing, (listing) => listing.class),
    __metadata("design:type", Array)
], Class.prototype, "listings", void 0);
Class = __decorate([
    typeorm_1.Entity()
], Class);
exports.Class = Class;
//# sourceMappingURL=Class.js.map