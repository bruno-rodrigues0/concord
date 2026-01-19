import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";
import type {
  UpdateServerBody,
  UpdateServerMemberParams,
} from "../server.schemas";

export const updateServerMember: Controller<{
  Params: UpdateServerMemberParams;
  Body: UpdateServerBody;
}> = async (request, reply) => {
  try {
    const result = await providers.server.update(
      request.params.id,
      request.body,
    );

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
