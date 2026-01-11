import { prisma } from "@/database/prisma";
import type { Server } from "@/app/@types/types";

export const update = async (
  id: string,
  data: Partial<Omit<Server, "id" | "ownerId">>,
) => {
  const result = await prisma.server.update({
    where: {
      id,
    },
    data,
  });

  return result;
};
