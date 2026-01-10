import type { Profile } from "@/app/@types/types";
import { prisma } from "@/database/prisma";

export const update = async (
  id: string,
  data: Partial<Omit<Profile, "id" | "userId">>,
): Promise<Profile | null> => {
  const { avatarUrl, bio, nickname } = data;
  const result = await prisma.profile.update({
    where: {
      id,
    },
    data: {
      avatarUrl,
      bio,
      nickname,
    },
  });

  return result;
};
