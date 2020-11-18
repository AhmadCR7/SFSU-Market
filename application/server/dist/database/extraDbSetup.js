"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyExtraSetup = void 0;
const Category_1 = require("./models/Category");
const Class_1 = require("./models/Class");
const Image_1 = require("./models/Image");
const Listing_1 = require("./models/Listing");
exports.applyExtraSetup = (sequelize) => {
    Listing_1.Listing.hasMany(Image_1.Image);
    Listing_1.Listing.belongsTo(Class_1.Class);
    Listing_1.Listing.belongsTo(Category_1.Category);
    sequelize.sync({ force: true });
};
//# sourceMappingURL=extraDbSetup.js.map