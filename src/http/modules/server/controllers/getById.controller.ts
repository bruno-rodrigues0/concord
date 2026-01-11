import type { Controller } from "@/app/@types/handlers";
import { StatusCodes } from "http-status-codes";
import { providers } from "../../../../database/providers";
import type { GetServerByIdParams } from "../server.schemas";

export const getServerById: Controller<{
  Params: GetServerByIdParams;
}> = async (request, reply) => {
  try {
    const result = await providers.server.getById(request.params.id);

    if (result === null) {
      return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: {
          message: "Record not found.",
        },
      });
    }

    return result;
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
