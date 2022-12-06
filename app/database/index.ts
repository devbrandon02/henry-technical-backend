import mongoose from 'mongoose'

const CreateConnectionDatabase = async () => {
  await mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {
      console.log("Database connection successful!");
    })
    .catch((err) => {
      console.error("@Database@index.ts", err);
    });
}


export default CreateConnectionDatabase