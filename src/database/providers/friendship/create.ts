import { prisma } from "@/database/prisma";

export const create = async (requesterId: string, addresseeId: string) => {
  const result = await prisma.friendship.create({
    data: {
      requestedAt: new Date(),
      state: "PENDING",
      requester: {
        connect: {
          id: requesterId,
        },
      },
      addressee: {
        connect: {
          id: addresseeId,
        },
      },
    },
  });

  return result;
};
