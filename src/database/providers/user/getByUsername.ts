import type { User } from "@/app/@types/types";
import { prisma } from "../../prisma";

export const getByUsername = async (
  username: string,
): Promise<Omit<User, "password"> | null> => {
  const result = await prisma.user.findUnique({
    where: {
      username,
    },
    omit: {
      password: true,
    },
  });

  return result;
};
