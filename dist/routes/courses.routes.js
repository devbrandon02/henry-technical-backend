"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const courses_controllers_1 = __importDefault(require("../controllers/courses.controllers"));
const router = express_1.default.Router();
router.route('/courses').get(courses_controllers_1.default.getAllCourses);
router.route('/new/course').post(courses_controllers_1.default.createCourse);
exports.default = router;
//# sourceMappingURL=courses.routes.js.map