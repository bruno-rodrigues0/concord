import { prisma } from "@/database/prisma";

export const count = async (filter: string = ""): Promise<number> => {
  const result = await prisma.directChannel.count({
    where: {
      OR: [
        {
          userB: {
            username: {
              contains: filter,
            },
          },
        },
        {
          userA: {
            username: {
              contains: filter,
            },
          },
        },
      ],
    },
  });

  return result;
};
