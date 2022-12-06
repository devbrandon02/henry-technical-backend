"use strict";
const mongoose_1 = require("mongoose");
const Courses = new mongoose_1.Schema({
    title: {
        type: String,
        require
    },
    id_instructor: {
        type: Number,
        require
    },
    description: {
        type: String,
        require
    },
    ranking: {
        type: Number,
        default: 0
    },
    difficulty: {
        type: String,
        enum: ['Easy', "Beginner", "Hard"],
        default: "Easy"
    },
    category: {
        type: String,
        enum: ["English", "Spanish", "Frech", "Chinese"],
        default: 'English'
    },
    imageUrl: {
        type: String,
        default: "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2020/04/08100945/idiomas-portada-1024x597.jpg"
    },
    status: {
        type: String,
        enum: ["Active", "Completed"]
    },
});
module.exports = (0, mongoose_1.model)('Course', Courses);
//# sourceMappingURL=courses.model.js.map