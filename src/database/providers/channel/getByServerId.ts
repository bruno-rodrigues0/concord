import { prisma } from "@/database/prisma";
import type { Channel } from "@/app/@types/types";

export const getBySeverId = async (id: string): Promise<Channel[] | null> => {
  const result = await prisma.channel.findMany({
    where: {
      serverId: id,
    },
  });

  return result;
};
