export interface ICourse {
  id: number
  id_instructor: number
  difficulty: string
  title: string,
  description: string
  ranking: number
  category: string
  status: string
  imageUrl: string
}

export interface ILesson {
  id: number
  id_instructor: string
  id_course: string
  title: string,
  description: string
  videoUrl: string
}



export interface IGetAllCourseRequest {
  category: string
  status: string
}