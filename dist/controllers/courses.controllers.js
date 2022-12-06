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
const data_access_1 = require("../data-access");
const models_1 = require("../models");
// TODO: SWAGGER
const getAllCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { category } = req.query;
    console.log("Category", category);
    try {
        let response = yield data_access_1.coursesDb.find({ category: category || '' }, {});
        console.log("response", response);
    }
    catch (error) {
    }
    return res.json({
        message: 'hola'
    });
});
// TODO: SWAGGER
const createCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let body = req.body;
    let new_Course = new models_1.Course({
        title: body.title,
        description: body.description,
        category: body.category,
        difficulty: body.difficulty,
        id_instructor: body.id_instructor,
        ranking: body.ranking,
        status: body.status
    });
    try {
        let response = yield data_access_1.coursesDb.create(new_Course);
        return res.status(201).json({ ok: true, course: response });
    }
    catch (err) {
        console.error("@courses.controllers.ts", err);
        return res.json({
            ok: false,
            err: "Validation error, the ranking and instructor id fields must be numeric"
        });
    }
});
exports.default = {
    getAllCourses,
    createCourse
};
//# sourceMappingURL=courses.controllers.js.map