import { prisma } from "@/database/prisma";
import type { Channel } from "@/app/@types/types";

export const getById = async (id: string): Promise<Channel | null> => {
  const result = await prisma.channel.findUnique({
    where: {
      id,
    },
  });

  return result;
};
