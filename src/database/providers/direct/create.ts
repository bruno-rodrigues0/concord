import type { DirectChannel } from "@/app/@types/types";
import { prisma } from "@/database/prisma";

export const create = async (
  data: Omit<DirectChannel, "id">,
): Promise<DirectChannel | null> => {
  const { userAId, userBId } = data;

  const result = await prisma.directChannel.create({
    data: {
      userA: {
        connect: {
          id: userAId,
        },
      },
      userB: {
        connect: {
          id: userBId,
        },
      },
    },
  });

  return result;
};
