import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { routes } from "./routes/index";
import CreateConnectionDatabase from './database';
import bodyParser from 'body-parser';
import cors from 'cors'

const app: Express = express();
const port = process.env.PORT || 3000;

dotenv.config();

// Config cors
app.use(cors())

// create application/json parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// INIT CONNECTION DATABASES - MONGODB
CreateConnectionDatabase();

// INIT ROUTES APP
app.use("/api/v1", routes)

// INIT SERVER APP
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});