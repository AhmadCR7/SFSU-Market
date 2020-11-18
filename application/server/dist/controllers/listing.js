"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListings = void 0;
const Listing_1 = require("../database/entities/Listing");
const Category_1 = require("../database/entities/Category");
const typeorm_1 = require("typeorm");
exports.getListings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.query.searchQuery) {
        const search = req.query.searchQuery;
        if (req.query.category === 'all') {
            const listings = yield Listing_1.Listing.find({ where: { title: typeorm_1.Like(`%${search}%`) } });
            res.send({
                data: listings,
                errors: [],
            });
            return;
        }
        const category = yield Category_1.Category.findOne({ where: { name: req.query.category } });
        if (category) {
            const listings = yield Listing_1.Listing.find({
                where: {
                    title: typeorm_1.Like(`%${search}%`),
                    category,
                },
            });
            res.send({
                data: listings,
                errors: [],
            });
            return;
        }
    }
    if (req.query.category === 'all') {
        res.send({
            data: yield Listing_1.Listing.find(),
            errors: [],
        });
    }
    const category = yield Category_1.Category.findOne({ where: { name: req.query.category } });
    if (category) {
        const listings = yield Listing_1.Listing.find({
            where: {
                category,
            },
        });
        res.send({
            data: listings,
            errors: [],
        });
        return;
    }
});
//# sourceMappingURL=listing.js.map