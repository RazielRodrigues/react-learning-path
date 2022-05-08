import express from 'express';
import { routes } from './routes';

const app = express();

// Middleware
app.use(express.json());
app.use(routes);
app.listen(3333, () => {});