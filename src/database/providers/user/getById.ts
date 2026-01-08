import type { User } from "@/app/@types/types";
import { prisma } from "../../prisma";

export const getById = async (
  id: string,
): Promise<Omit<User, "password"> | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    omit: {
      password: true,
    },
  });

  return result;
};
