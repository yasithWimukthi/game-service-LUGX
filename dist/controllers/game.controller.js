"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameById = exports.getAllGames = exports.createGame = void 0;
const game_service_1 = require("../services/game.service");
const createGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield game_service_1.gameService.createGame(req.body);
    res.status(201).json(game);
});
exports.createGame = createGame;
const getAllGames = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield game_service_1.gameService.getAllGames();
    res.json(games);
});
exports.getAllGames = getAllGames;
const getGameById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield game_service_1.gameService.getGameById(Number(req.params.id));
    if (!game)
        return res.status(404).json({ message: 'Game not found' });
    res.json(game);
});
exports.getGameById = getGameById;
