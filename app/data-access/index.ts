import Courses from "../models/courses.model"
import Lessons from "../models/lesson.model"
import makeCourseDb from "./courses.db"
import makeLessonDb from "./lessons.db"

const coursesDb = makeCourseDb()
const LessonsDb = makeLessonDb()


export {
  coursesDb,
  LessonsDb
}
