import { prisma } from "@/database/prisma";

export const create = async (username: string, userBId: string) => {
  const result = await prisma.directChannel.create({
    data: {
      userA: {
        connect: {
          username: username,
        },
      },
      userB: {
        connect: {
          id: userBId,
        },
      },
    },
  });

  return result;
};
