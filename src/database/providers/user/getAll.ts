import type { User } from "@/app/@types/types";
import { prisma } from "../../prisma";

export const getAll = async (): Promise<Omit<User, "password">[] | null> => {
  const result = await prisma.user.findMany({
    omit: {
      password: true,
    },
  });

  return result;
};
