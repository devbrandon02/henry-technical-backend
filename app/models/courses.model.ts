import { Schema, model } from 'mongoose';
import { ICourse } from '../utilities/Courses.types';

const Courses = new Schema<ICourse>({
  title: {
    type: String,
    require
  },

  id_instructor: {
    type: Number,
    require
  },

  description: {
    type: String,
    require
  },

  ranking: {
    type: Number,
    default: 0
  },

  difficulty: {
    type: String,
    enum: ['Easy', "Beginner", "Hard"],
    default: "Easy"
  },

  category: {
    type: String,
    enum: ["English", "Spanish", "Frech", "Chinese"],
    default: 'English'
  },

  imageUrl: {
    type: String,
    default: "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2020/04/08100945/idiomas-portada-1024x597.jpg"
  },

  status: {
    type: String,
    enum: ["Active", "Completed"]
  },
})


export = model<ICourse>('Course', Courses);
