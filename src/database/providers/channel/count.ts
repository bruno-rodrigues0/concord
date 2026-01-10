import { prisma } from "@/database/prisma";

export const count = async (filter: string = ""): Promise<number> => {
  const result = await prisma.channel.count({
    where: {
      title: {
        contains: filter,
      },
    },
  });

  return result;
};
