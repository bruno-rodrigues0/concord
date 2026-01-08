import { prisma } from "@/database/prisma";

export const count = async (): Promise<number> => {
  const result = await prisma.user.count();

  return result;
};
