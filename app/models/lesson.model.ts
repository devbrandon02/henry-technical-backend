import { Schema, model } from 'mongoose';
import { ICourse, ILesson } from '../utilities/Courses.types';

const Lesson = new Schema<ILesson>({
  title: {
    type: String,
    require
  },

  id_instructor: {
    type: String,
    require
  },

  id_course: {
    type: String,
    require
  },

  description: {
    type: String,
    require
  },

  videoUrl: {
    type: String,
    default: "https://www.youtube.com/watch?v=Gzs60iBgd3E&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&index=1"
  },
})


export = model<ILesson>('Lesson', Lesson);
