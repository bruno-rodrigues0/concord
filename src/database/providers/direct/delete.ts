import { prisma } from "@/database/prisma";
import type { DirectChannel } from "@/app/@types/types";

export const del = async (id: string): Promise<DirectChannel | null> => {
  const result = await prisma.directChannel.delete({
    where: {
      id,
    },
  });

  return result;
};
