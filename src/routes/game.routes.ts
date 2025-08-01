import { Router } from 'express';
import { createGame, getAllGames, getGameById } from '../controllers/game.controller';

const router = Router();

router.post('/', createGame);
router.get('/', getAllGames);
// @ts-ignore
router.get('/:id', getGameById);

router.get('/hello/ping', (req, res) => {
    res.send('Hello World - After Blue Green Deployment - Game Service');
});

export default router;
