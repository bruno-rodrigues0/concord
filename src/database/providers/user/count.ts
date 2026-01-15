import { prisma } from "@/database/prisma";

export const count = async (filter: string = "") => {
  const result = await prisma.user.count({
    where: {
      name: { contains: filter },
    },
  });

  return result;
};
