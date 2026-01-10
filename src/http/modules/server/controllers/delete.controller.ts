import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";
import type { DeleteServerParams } from "../server.schemas";

export const deleteServer: Controller<{
  Params: DeleteServerParams;
}> = async (request, reply) => {
  try {
    const result = await providers.server.del(request.params.id);

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
