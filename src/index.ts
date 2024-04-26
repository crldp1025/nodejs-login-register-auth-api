import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import mongoose from 'mongoose';
import route from './route';

dotenv.config();

const app = express();
const port = 3000;
const url: string = process.env.MONGO_DB_URL as string;

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('NodeJS Rest API');
});

mongoose.connect(url)
.then(() => {
  console.log('Database connected!');

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch((error) => {
  console.log('Database connection failed!');
});

app.use('/', route());