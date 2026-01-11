import { prisma } from "../../prisma";

export const getByUsername = async (
  username: string,
  include_profile: boolean = false,
) => {
  const result = await prisma.user.findUnique({
    where: {
      username,
    },
    omit: {
      password: true,
    },
    include: {
      profile: include_profile,
    },
  });

  return result;
};
