import express from 'express';
import { routes } from './routes';
import cors from 'cors';

const corsOptions = {
    origin: 'https://react-learning-path.vercel.app/',
}
const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 3333, () => {});