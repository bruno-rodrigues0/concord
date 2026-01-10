import type { Channel, Friendship } from "@/app/@types/types";
import { prisma } from "@/database/prisma";

export const create = async (
  data: Omit<Channel, "id">,
): Promise<Channel | null> => {
  const { title, serverId, position, type } = data;

  const result = await prisma.channel.create({
    data: {
      title,
      position,
      type,
      server: {
        connect: {
          id: serverId,
        },
      },
    },
  });

  return result;
};
