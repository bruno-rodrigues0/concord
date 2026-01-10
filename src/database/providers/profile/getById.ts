import { prisma } from "@/database/prisma";
import type { Profile } from "@/app/@types/types";

export const getById = async (id: string): Promise<Profile | null> => {
  const result = await prisma.profile.findUnique({
    where: {
      id,
    },
  });

  return result;
};
