import type { Server } from "@/app/@types/types";
import { prisma } from "../../prisma";

export const getAllServerByMember = async (
  userId: string,
  page: number = 1,
  limit: number = 25,
  filter: string = "",
): Promise<{ server: Server }[] | null> => {
  const result = await prisma.serverMember.findMany({
    where: {
      AND: [
        {
          userId,
        },
        {
          server: {
            title: { contains: filter },
          },
        },
      ],
    },
    select: {
      server: true,
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  return result;
};
