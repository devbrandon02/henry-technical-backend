import * as models from "../models"
import makeCourseDb from "./courses.db"

const coursesDb = makeCourseDb(models)

export {
  coursesDb
}
