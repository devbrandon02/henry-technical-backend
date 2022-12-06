import { Course } from "../models"
import { ICourse } from "../utilities/Courses.types"

const makeCourseDb = () => {
  const find = async (_filter: Object, _options: Object) => {
    return await Course.
      find(_filter)
  }

  const create = async (courseInfo: ICourse) => {
    return await Course.create(courseInfo)
  }

  return Object.freeze( {
    find,
    create
  })
}



export default makeCourseDb

