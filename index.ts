import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import "reflect-metadata"
import { AppDataSource } from './data-source';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

AppDataSource.initialize()
  .then(() => console.log("Initilize database"))
  .catch((err) => console.log("Error database", err))

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});