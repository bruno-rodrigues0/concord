import type { User } from "@/app/@types/types";
import { prisma } from "@/database/prisma";
import { bcryptService } from "@/services/bcrypt.service";

type CreateUserProps = User & {
  nickname: string;
};

export const create = async (
  data: CreateUserProps,
): Promise<Omit<User, "password"> | null> => {
  const password = await bcryptService.encrypt(data.password);

  if (!password) {
    return null;
  }

  const result = await prisma.user.create({
    data: {
      ...data,
      password,
      profile: {
        create: {
          nickname: data.nickname,
        },
      },
    },
  });

  return result;
};
