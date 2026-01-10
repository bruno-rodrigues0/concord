import { prisma } from "@/database/prisma";

export const count = async (
  requesterId: string,
  filter: string = "",
): Promise<number> => {
  const result = await prisma.friendship.count({
    where: {
      requesterId,
      addressee: {
        username: {
          contains: filter,
        },
      },
    },
  });

  return result;
};
