import { prisma } from "@/database/prisma";

export const count = async () => {
  const result = await prisma.user.count();

  return result;
};
