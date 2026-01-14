import { prisma } from "@/database/prisma";

export const getByRequesterId = async (
  requesterId: string,
  page: number = 1,
  limit: number = 25,
  filter: string = "",
) => {
  const result = await prisma.friendship.findMany({
    where: {
      requesterId,
      OR: [
        {
          addressee: {
            name: {
              contains: filter,
            },
          },
        },
      ],
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  return result;
};
