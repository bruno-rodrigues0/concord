import type { Profile } from "@/app/@types/types";
import { prisma } from "@/database/prisma";

type CreateProfileProps = Profile & {
  userId: string;
};

export const create = async (
  data: CreateProfileProps,
): Promise<Profile | null> => {
  const result = await prisma.profile.create({
    data: {
      nickname: data.nickname,
      user: {
        connect: {
          id: data.userId,
        },
      },
    },
    omit: {
      bio: true,
      avatarUrl: true,
    },
  });

  return result;
};
