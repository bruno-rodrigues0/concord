import type { User } from "@/app/@types/types";
import { prisma } from "@/database/prisma";
import { bcryptService } from "@/services/bcrypt.service";

type CreateUserProps = Omit<User, "id"> & {
  nickname: string;
};

export const create = async (
  data: CreateUserProps,
): Promise<Omit<User, "password"> | null> => {
  const password = await bcryptService.encrypt(data.password);

  if (!password) {
    return null;
  }

  let result = null;

  result = await prisma.user.create({
    data: {
      username: data.username,
      email: data.email,
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
