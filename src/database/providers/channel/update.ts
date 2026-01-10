import { prisma } from "@/database/prisma";
import type { Channel } from "@/app/@types/types";

export const update = async (
  id: string,
  data: Omit<Channel, "id">,
): Promise<Channel | null> => {
  const result = await prisma.channel.update({
    where: {
      id,
    },
    data,
  });

  return result;
};
