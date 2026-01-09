import { prisma } from "@/database/prisma";
import type { Server } from "@/app/@types/types";

export const create = async (
  data: Omit<Server, "id">,
): Promise<Server | null> => {
  const result = await prisma.server.create({
    data: {
      title: data.title,
      owner: {
        connect: {
          id: data.ownerId,
        },
      },
    },
  });

  return result;
};
