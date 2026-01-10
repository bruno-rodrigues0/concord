import { prisma } from "@/database/prisma";
import type { Friendship } from "@/app/@types/types";

export const del = async (
  requesterId: string,
  addresseeId: string,
): Promise<Friendship | null> => {
  const result = await prisma.friendship.delete({
    where: {
      requesterId_addresseeId: {
        requesterId,
        addresseeId,
      },
    },
  });

  return result;
};
