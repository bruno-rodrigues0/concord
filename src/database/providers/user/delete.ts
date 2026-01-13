import { prisma } from "../../prisma";

export const del = async (username: string) => {
  const result = await prisma.user.delete({
    where: {
      username,
    },
  });

  return result;
};
