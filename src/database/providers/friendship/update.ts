import type { Friendship } from "@/app/@types/types";
import { prisma } from "@/database/prisma";

export const update = async (
  requesterId: string,
  addresseeId: string,
  data: Partial<Omit<Friendship, "requestedId" | "addresseeId">>,
): Promise<Friendship | null> => {
  const result = await prisma.friendship.update({
    where: {
      requesterId_addresseeId: {
        requesterId,
        addresseeId,
      },
    },
    data: {
      state: data?.state,
      acceptedAt: data?.acceptedAt,
      rejectedAt: data?.rejectedAt,
    },
  });

  return result;
};
