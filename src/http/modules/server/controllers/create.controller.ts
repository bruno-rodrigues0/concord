import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";
import type { CreateServerBody } from "../server.schemas";

export const createServer: Controller<{
  Body: CreateServerBody;
}> = async (request, reply) => {
  try {
    const result = await providers.server.create(request.body);

    if (result === null) {
      return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: {
          message: "Error while creating record.",
        },
      });
    }

    return reply.status(StatusCodes.CREATED).send(result);
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
