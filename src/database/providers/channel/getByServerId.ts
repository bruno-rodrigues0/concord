import { prisma } from "@/database/prisma";

export const getBySeverId = async (
  id: string,
  page: number = 1,
  limit: number = 25,
  filter: string = "",
) => {
  const result = await prisma.channel.findMany({
    where: {
      serverId: id,
      title: { contains: filter },
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  return result;
};
