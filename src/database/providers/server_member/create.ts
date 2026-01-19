import { prisma } from "@/database/prisma";

export const create = async (serverId: string, userId: string) => {
  const result = await prisma.serverMember.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      server: {
        connect: {
          id: serverId,
        },
      },
    },
  });

  return result;
};
