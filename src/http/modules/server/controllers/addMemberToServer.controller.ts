import type { Controller } from "@/app/@types/handlers";
import { StatusCodes } from "http-status-codes";
import { providers } from "@/database/providers";
import type {
  AddMemberToServerBody,
  DefaultServerParams,
} from "../server.schemas";

export const addMemberToServer: Controller<{
  Body: AddMemberToServerBody;
  Params: DefaultServerParams;
}> = async (request, reply) => {
  try {
    const { id } = request.params;
    const { userId } = request.body;
    const result = await providers.serverMember.create(id, userId);

    if (result === null) {
      return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: {
          message: "Erro while creating record.",
        },
      });
    }

    return reply.status(StatusCodes.CREATED).send(result);
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
