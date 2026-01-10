import { prisma } from "@/database/prisma";
import type { DirectChannel } from "@/app/@types/types";

export const getById = async (id: string): Promise<DirectChannel | null> => {
  const result = await prisma.directChannel.findUnique({
    where: {
      id,
    },
  });

  return result;
};
