"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = require("./routes/index");
const database_1 = __importDefault(require("./database"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
dotenv_1.default.config();
// Config cors
app.use((0, cors_1.default)());
// create application/json parser
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
// INIT CONNECTION DATABASES - MONGODB
(0, database_1.default)();
// INIT ROUTES APP
app.use("/api/v1", index_1.routes);
// INIT SERVER APP
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
//# sourceMappingURL=app.js.map