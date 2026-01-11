import { prisma } from "@/database/prisma";
import type { ServerMember } from "@/app/@types/types";

export const del = async (serverId: string, userId: string) => {
  const result = await prisma.serverMember.delete({
    where: {
      serverId_userId: {
        serverId,
        userId,
      },
    },
  });

  return result;
};
