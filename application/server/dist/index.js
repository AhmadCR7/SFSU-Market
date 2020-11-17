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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: `.env.${process.env.NODE_ENV}` });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const index_1 = __importDefault(require("./routes/index"));
const category_1 = __importDefault(require("./routes/category"));
const listing_1 = __importDefault(require("./routes/listing"));
const connectTypeorm_1 = require("./database/connectTypeorm");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/build')));
    app.use(cors_1.default());
    const s3 = new aws_sdk_1.default.S3({ apiVersion: '2006-03-01' });
    connectTypeorm_1.createNewConnection();
    app.use('/api', index_1.default);
    app.use('/api/category', category_1.default);
    app.use('/api/listing', listing_1.default);
    app.use((req, res) => {
        res.sendFile(path_1.default.resolve(__dirname, '../', '../', 'client', 'build', 'index.html'));
    });
    app.listen(process.env.PORT, () => {
        console.log(`server started on http://localhost:${process.env.PORT}`);
    });
});
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map