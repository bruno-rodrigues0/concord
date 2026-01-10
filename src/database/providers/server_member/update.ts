import { prisma } from "@/database/prisma";
import type { ServerMember } from "@/app/@types/types";

export const update = async (
  serverId: string,
  userId: string,
  data: Omit<ServerMember, "serverId" | "userId">,
): Promise<ServerMember | null> => {
  const result = await prisma.serverMember.update({
    where: {
      serverId_userId: {
        serverId,
        userId,
      },
    },
    data,
  });

  return result;
};
