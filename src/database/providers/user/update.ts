import type { User } from "@/app/@types/types";
import { prisma } from "@/database/prisma";

type UpdateUserProps = Partial<
  Omit<User, "id" | "password"> &
    Partial<{
      nickname: string;
      avatarUrl: string;
      bio: string;
    }>
>;

export const update = async (username: string, data: UpdateUserProps) => {
  const result = await prisma.user.update({
    where: {
      username,
    },
    data: {
      username: data.username,
      email: data.email,
      profile: {
        update: {
          nickname: data.nickname,
          avatarUrl: data.avatarUrl,
          bio: data.bio,
        },
      },
    },
  });

  return result;
};
