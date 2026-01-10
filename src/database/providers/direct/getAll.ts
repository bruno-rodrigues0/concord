import { prisma } from "@/database/prisma";
import type { DirectChannel } from "@/app/@types/types";

export const getAll = async (
  filter: string = "",
): Promise<DirectChannel[] | null> => {
  const result = await prisma.directChannel.findMany({
    where: {
      OR: [
        {
          userA: {
            username: {
              contains: filter,
            },
          },
        },
        {
          userB: {
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
