import type { Friendship } from "@/app/@types/types";
import { prisma } from "@/database/prisma";

export const create = async (
  data: Omit<Friendship, "state">,
): Promise<Friendship | null> => {
  const result = await prisma.friendship.create({
    data: {
      requestedAt: data.requestedAt,
      requester: {
        connect: {
          id: data.requesterId,
        },
      },
      addressee: {
        connect: {
          id: data.addresseeId,
        },
      },
    },
  });

  return result;
};
