import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const gameService = {
    createGame: (data: any) => {
        try {
            prisma.game.create({data})
            console.log("Incoming POST body:", data);
        } catch (err) {
            console.error(err);
        }
    },
    getAllGames: () => prisma.game.findMany(),
    getGameById: (id: number) => prisma.game.findUnique({ where: { id } }),
};
