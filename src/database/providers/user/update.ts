import type { User } from "@/app/@types/types";
import { prisma } from "@/database/prisma";

export const update = async (id: string, data: Partial<Omit<User, "id">>) => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data,
  });

  return result;
};
