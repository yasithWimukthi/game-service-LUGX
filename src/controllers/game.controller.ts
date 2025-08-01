import { Request, Response } from 'express';
import { gameService } from '../services/game.service';

export const createGame = async (req: Request, res: Response) => {
    const game = await gameService.createGame(req.body);
    res.status(201).json(game);
};

export const getAllGames = async (_: Request, res: Response) => {
    const games = await gameService.getAllGames();
    res.json(games);
};

export const getGameById = async (req: Request, res: Response) => {
    const game = await gameService.getGameById(Number(req.params.id));
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.json(game);
};
