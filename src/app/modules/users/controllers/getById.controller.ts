import { StatusCodes } from "http-status-codes";
import type { Controller } from "../../../@types/handlers";
import type { GetByIdParams } from "../user.schemas";
import { providers } from "../../../database/providers";

export const getUserById: Controller<{
  Params: GetByIdParams;
}> = async (request, reply) => {
  try {
    const result = await providers.user.getById(request.params.id);

    if (result === null) {
      return reply.status(StatusCodes.NOT_FOUND).send({
        error: {
          message: "Record not found.",
        },
      });
    }

    return reply.status(StatusCodes.OK).send(result);
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
