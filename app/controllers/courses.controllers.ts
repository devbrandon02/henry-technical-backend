import { Request, Response } from 'express'
import { coursesDb } from '../data-access'
import { Course } from '../models'
import { ICourse } from '../utilities/Courses.types'

// TODO: SWAGGER
const getAllCourses = async (req: Request, res: Response) => {
  let { category } = req.query
  let { status } = req.query
  
  try {
    let response = await coursesDb.find( category  ? {category} : {}, {})

    if(status){
      response = response.filter((course) => {
        return course.status === status
      })
    }

    if(response.length < 1){
      return res.status(404).json({
        ok: false,
        response,
        message: "There are no registered courses"
      })
    }

    return res.status(200).json({
      ok: true,
      data: response
    })
    
  } catch (err) {
    console.error("@courses.controllers.ts", err);
    return res.json({
      ok: false,
      err: err
    })
  }
}


// TODO: SWAGGER
const createCourse = async (req: Request, res: Response) => {
  let body:ICourse = req.body

  let new_Course = new Course({
    title: body.title,
    description: body.description,
    category: body.category,
    difficulty: body.difficulty,
    id_instructor: body.id_instructor,
    ranking: body.ranking,
    status: body.status
  })

  try {
    let response = await coursesDb.create(new_Course)

    return res.status(201).json({ ok: true, course: response })
    
  } catch (err) {
    console.error("@courses.controllers.ts", err);
    return res.json({
      ok: false,
      err: "Validation error, the ranking and instructor id fields must be numeric" 
    })
  }
}



export default {
  getAllCourses,
  createCourse
}