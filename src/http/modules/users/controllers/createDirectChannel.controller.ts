import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";
import type {
  CreateDirectChannelBody,
  CreateDirectChannelParams,
} from "../user.schemas";

export const createDirectChannel: Controller<{
  Params: CreateDirectChannelParams;
  Body: CreateDirectChannelBody;
}> = async (request, reply) => {
  try {
    const { userBId } = request.body;
    const { username } = request.params;
    const result = await providers.direct.create(username, userBId);

    if (result === null) {
      return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: {
          message: "Error while creating record.",
        },
      });
    }

    return reply.status(StatusCodes.CREATED).send();
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
