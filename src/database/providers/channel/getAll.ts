import { prisma } from "@/database/prisma";
import type { Channel } from "@/app/@types/types";

export const getAll = async (
  filter: string = "",
): Promise<Channel[] | null> => {
  const result = await prisma.channel.findMany({
    where: {
      title: {
        contains: filter,
      },
    },
  });

  return result;
};
