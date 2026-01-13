import { prisma } from "@/database/prisma";

export const getAll = async (
  page: number = 1,
  limit: number = 25,
  filter: string = "",
) => {
  const result = await prisma.user.findMany({
    where: {
      name: { contains: filter },
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  return result;
};
