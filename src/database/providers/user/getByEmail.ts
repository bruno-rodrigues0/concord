import { prisma } from "@/database/prisma";

export const getByEmail = async (email: string) => {
  const result = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return result;
};
