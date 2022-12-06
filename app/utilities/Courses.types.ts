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



export interface IGetAllCourseRequest {
  category: string
  status: string
}