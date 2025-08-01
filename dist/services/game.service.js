"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.gameService = {
    createGame: (data) => prisma.game.create({ data }),
    getAllGames: () => prisma.game.findMany(),
    getGameById: (id) => prisma.game.findUnique({ where: { id } }),
};
