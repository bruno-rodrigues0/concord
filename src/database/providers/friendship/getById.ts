import { prisma } from "@/database/prisma";
import type { Friendship } from "@/app/@types/types";

export const getById = async (
  addresseeId: string,
  requesterId: string,
): Promise<Friendship | null> => {
  const result = await prisma.friendship.findUnique({
    where: {
      requesterId_addresseeId: {
        requesterId,
        addresseeId,
      },
    },
  });

  return result;
};
