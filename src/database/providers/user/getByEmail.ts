import type { User } from "@/app/@types/types";
import { prisma } from "../../prisma";

export const getByEmail = async (email: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return result;
};
