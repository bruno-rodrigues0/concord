import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";
import type { DeleteUserParams } from "../user.schemas";

export const deleteUser: Controller<{
  Params: DeleteUserParams;
}> = async (request, reply) => {
  try {
    const { username } = request.params;
    const result = await providers.user.del(username);

    if (result === null) {
    }

    return reply.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
