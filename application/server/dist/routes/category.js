"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const category_1 = require("../controllers/category");
router.get('/getAll', category_1.getAllCategories);
exports.default = router;
//# sourceMappingURL=category.js.map