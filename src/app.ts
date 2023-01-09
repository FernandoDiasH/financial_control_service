import express from 'express';
import { routes } from './routes';
import { errorMiddleware } from './utils/errors/ErrorMiddleware';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorMiddleware)

export { app };
