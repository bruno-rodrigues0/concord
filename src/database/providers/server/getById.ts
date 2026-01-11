import { prisma } from "@/database/prisma";
import type { Server } from "@/app/@types/types";

export const getById = async (id: string) => {
  const result = await prisma.server.findUnique({
    where: {
      id,
    },
  });

  return result;
};
