import { Lesson } from "../models"
import { ILesson } from "../utilities/Courses.types"

const makeLessonDb = () => {
  const find = async (_filter: Object, _options: Object) => {
    return await Lesson.
      find(_filter)
  }

  const create = async (lessonInfo: ILesson) => {
    return await Lesson.create(lessonInfo)
  }

  return Object.freeze( {
    find,
    create
  })
}



export default makeLessonDb

