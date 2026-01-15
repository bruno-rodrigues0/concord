import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";
import type { UpdateUserBody, UpdateUserParams } from "../user.schemas";

export const updateUser: Controller<{
  Params: UpdateUserParams;
  Body: UpdateUserBody;
}> = async (request, reply) => {
  try {
    const { id } = request.params;
    const data = request.body;
    const result = await providers.user.update(id, data);

    if (result === null) {
      return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: {
          message: "Error while updating record.",
        },
      });
    }

    return reply.status(StatusCodes.OK).send();
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
