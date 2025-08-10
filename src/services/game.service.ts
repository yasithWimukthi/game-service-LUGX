import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const gameService = {
    createGame: (data: any) => prisma.game.create({ data }),
    getAllGames: () => prisma.game.findMany(),
    getGameById: (id: number) => prisma.game.findUnique({ where: { id } }),
};
