import { prisma } from "@/database/prisma";
import type { Server } from "@/app/@types/types";

export const del = async (id: string) => {
  const result = await prisma.server.delete({
    where: {
      id,
    },
  });

  return result;
};
