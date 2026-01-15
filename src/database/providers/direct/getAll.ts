import { prisma } from "@/database/prisma";
import type { DirectChannel } from "@/app/@types/types";

export const getAll = async (
  page: number = 1,
  limit: number = 25,
  filter: string = "",
): Promise<DirectChannel[] | null> => {
  const result = await prisma.directChannel.findMany({
    where: {
      OR: [
        {
          userA: {
            id: { contains: filter },
          },
        },
        {
          userB: {
            id: { contains: filter },
          },
        },
      ],
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  return result;
};
