import express from 'express'
import coursesControllers from '../controllers/courses.controllers';

const router = express.Router();

router.route('/courses').get(coursesControllers.getAllCourses)


router.route('/new/course').post(coursesControllers.createCourse)


export default router