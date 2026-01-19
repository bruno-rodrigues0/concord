import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";
import type { UpdateServerBody, UpdateServerParams } from "../server.schemas";

export const updateServer: Controller<{
  Params: UpdateServerParams;
  Body: UpdateServerBody;
}> = async (request, reply) => {
  try {
    const { id } = request.params;
    const data = request.body;

    const result = await providers.server.update(id, data);

    if (result === null) {
      return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: {
          message: "Error while updating record.",
        },
      });
    }

    return reply.status(StatusCodes.CREATED).send(result);
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
