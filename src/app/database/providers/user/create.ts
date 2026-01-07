import type { User } from "../../../@types/types";
import { prisma } from "../../prisma";

export const create = async (
  data: Omit<User, "id">,
): Promise<Omit<User, "password"> | null> => {
  const result = await prisma.user.create({
    data,
  });

  return result;
};
