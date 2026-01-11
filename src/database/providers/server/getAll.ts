import type { Server } from "@/app/@types/types";
import { prisma } from "../../prisma";

export const getAll = async (
  page: number = 1,
  limit: number = 25,
  filter: string = "",
) => {
  const result = await prisma.server.findMany({
    where: {
      title: {
        contains: filter,
      },
    },
    skip: (page - 1) * limit,
    take: limit,
    include: {
      owner: true,
      channels: true,
      serverMembers: {
        include: {
          user: true,
        },
      },
    },
  });

  return result;
};
