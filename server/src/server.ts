import express from 'express';
import { routes } from './routes';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors({ 
    origin: 'https://react-learning-path.vercel.app',  
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 3333, () => {});