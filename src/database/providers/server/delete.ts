import { prisma } from "@/database/prisma";
import type { Server } from "@/app/@types/types";

export const del = async (id: string): Promise<Server | null> => {
  const result = await prisma.server.delete({
    where: {
      id,
    },
  });

  return result;
};
