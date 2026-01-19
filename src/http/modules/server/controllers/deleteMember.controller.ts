import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";
import type { DeleteMemberParams } from "../server.schemas";

export const updateServerMember: Controller<{
  Params: DeleteMemberParams;
}> = async (request, reply) => {
  try {
    const { id, userId } = request.params;
    const result = await providers.serverMember.del(id, userId);

    if (result === null) {
      return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: {
          message: "Error while deleting record.",
        },
      });
    }

    return reply.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
