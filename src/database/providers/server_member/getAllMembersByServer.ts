import type { ServerMember, User } from "@/app/@types/types";
import { prisma } from "../../prisma";

export const getAllMembersByServer = async (
  serverId: string,
  page: number = 1,
  limit: number = 25,
  filter: string = "",
) => {
  const result = await prisma.serverMember.findMany({
    where: {
      AND: [
        {
          serverId,
        },
        {
          user: {
            OR: [
              {
                username: { contains: filter },
              },
              {
                profile: {
                  nickname: { contains: filter },
                },
              },
            ],
          },
        },
      ],
    },
    select: {
      user: true,
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  return result;
};
