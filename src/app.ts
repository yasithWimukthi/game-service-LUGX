import express from 'express';
import cors from 'cors';
import gameRoutes from './routes/game.routes';

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/games', gameRoutes);

export default app;