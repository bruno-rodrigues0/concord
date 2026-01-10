import { prisma } from "@/database/prisma";
import type { ServerMember } from "@/app/@types/types";

export const getById = async (
  serverId: string,
  userId: string,
): Promise<ServerMember | null> => {
  const result = await prisma.serverMember.findUnique({
    where: {
      serverId_userId: {
        serverId,
        userId,
      },
    },
  });

  return result;
};
