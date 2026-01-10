import { prisma } from "@/database/prisma";
import type { Channel } from "@/app/@types/types";

export const del = async (id: string): Promise<Channel | null> => {
  const result = await prisma.channel.delete({
    where: {
      id,
    },
  });

  return result;
};
