import { Request, Response } from "express"
import { coursesDb, LessonsDb } from "../data-access"
import { Lesson } from "../models"
import { ILesson } from "../utilities/Courses.types"


// TODO SWAGGER
const getLessonByIdCourse = async (req: Request, res: Response) => {
  let { id_course } = req.query
  
  try {
    let responseCourseDb = await coursesDb.find({ _id: id_course }, {})
    let responseLessonDb = await LessonsDb.find({ id_course }, {})

    console.log("responseCourseDb", responseCourseDb);
    console.log("responseLessonDb", responseLessonDb);
    
    

    if(responseCourseDb.length < 1){
      return res.status(404).json({
        ok: false,
        message: "wrong course id"
      })
    }

    if(responseLessonDb.length < 1 && responseCourseDb.length < 1){
      return res.status(404).json({
        ok: false,
        course: responseCourseDb,
        lessons: responseLessonDb,
        message: "There are no registered courses"
      })
    }

    return res.status(200).json({
      ok: true,
      course: responseCourseDb,
      lessons: responseLessonDb,
    })

    
  } catch (err) {
    console.error("@lessons.controllers.ts", err);
    return res.json({
      ok: false,
      err: err
    })
  }
}



// TODO: SWAGGER
const createLesson = async (req: Request, res: Response) => {
  let body:ILesson = req.body

  let new_Lesson = new Lesson({
    title: body.title,
    description: body.description,
    id_course: body.id_course,
    id_instructor: body.id_instructor,
    videoUrl: body.videoUrl
  })

  try {
    let response = await LessonsDb.create(new_Lesson)
    console.log("Response", response);
    
    return res.status(201).json({ ok: true, lesson: response })
    
  } catch (err) {
    console.error("@lesson.controllers.ts", err);
    return res.json({
      ok: false,
      err: "Validation error, the ranking and instructor id fields must be numeric" 
    })
  }
}



export default {
  createLesson,
  getLessonByIdCourse
}