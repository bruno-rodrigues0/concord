import { StatusCodes } from "http-status-codes";
import type { Controller } from "../../../../app/@types/handlers";
import { providers } from "../../../../database/providers";
import type { GetAllUserDirectsParams } from "../user.schemas";

export const getAllUserDirects: Controller<{
  Params: GetAllUserDirectsParams;
}> = async (request, reply) => {
  try {
    const { username } = request.params;
    const result = await providers.direct.getAll(username);

    if (result === null) {
    }

    return reply.status(StatusCodes.OK).send(result);
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
