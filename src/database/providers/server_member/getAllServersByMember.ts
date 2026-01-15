import { prisma } from "../../prisma";

export const getAllServerByMember = async (
  id: string,
  page: number = 1,
  limit: number = 25,
  filter: string = "",
) => {
  const result = await prisma.serverMember.findMany({
    where: {
      AND: [
        {
          user: {
            id,
          },
        },
        {
          server: {
            title: { contains: filter },
          },
        },
      ],
    },
    select: {
      server: true,
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  return result;
};
