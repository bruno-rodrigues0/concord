import { prisma } from "@/database/prisma";
import type { Friendship } from "@/app/@types/types";

export const getByRequesterId = async (
  requesterId: string,
  filter: string = "",
): Promise<Friendship[] | null> => {
  const result = await prisma.friendship.findMany({
    where: {
      requesterId,
      OR: [
        {
          addressee: {
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
