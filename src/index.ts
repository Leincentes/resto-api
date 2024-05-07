import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import router from './api/v1/routes';
import dotevn from 'dotenv';
import connectDB from '../config/db.config';
import compression from 'compression';

// load env variables
dotevn.config();

connectDB();

const app: Application = express();

app.use(express.static('public'));

// default middlewares
app.use(cors({
    credentials: true,
}))
app.use(bodyParser.json());
app.use(compression());
app.use(cookieParser());
app.use(helmet());
app.use('/api/v1', router);

export default app;