import express from 'express'
import coursesControllers from '../controllers/courses.controllers';
import lessonsControllers from '../controllers/lessons.controllers';

const router = express.Router();

router.route('/courses').get(coursesControllers.getAllCourses)
router.route('/new/course').post(coursesControllers.createCourse)
router.route('/new/lesson').post(lessonsControllers.createLesson)
router.route('/lesson').get(lessonsControllers.getLessonByIdCourse)




export default router