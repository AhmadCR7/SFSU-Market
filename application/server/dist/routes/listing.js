"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const listing_1 = require("../controllers/listing");
router.get('/getListings', listing_1.getListings);
exports.default = router;
//# sourceMappingURL=listing.js.map