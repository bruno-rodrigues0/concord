import type { Profile } from "../../generated/prisma/client";
import { prisma } from "../../prisma";

export const update = async (
  id: string,
  data: Profile,
): Promise<Profile | null> => {
  const result = await prisma.profile.update({
    where: {
      id,
    },
    data,
  });

  return result;
};
