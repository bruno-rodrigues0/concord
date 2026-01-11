import { prisma } from "@/database/prisma";
import type { ServerMember } from "@/app/@types/types";

export const create = async (data: ServerMember) => {
  const result = await prisma.serverMember.create({
    data: {
      user: {
        connect: {
          id: data.userId,
        },
      },
      server: {
        connect: {
          id: data.serverId,
        },
      },
    },
  });

  return result;
};
