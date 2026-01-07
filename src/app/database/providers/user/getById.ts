import type { User } from "../../../@types/types";
import { prisma } from "../../prisma";

export const getById = async (
  id: number,
): Promise<Omit<User, "password"> | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return result;
};
