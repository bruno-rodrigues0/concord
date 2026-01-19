import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";
import type {
  DefaultServerParams,
  DefaultServerQuery,
} from "../server.schemas";

export const getAllServerChannels: Controller<{
  Params: DefaultServerParams;
  Querystring: DefaultServerQuery;
}> = async (request, reply) => {
  try {
    const { id } = request.params;
    const { page, limit, filter } = request.query;
    const result = await providers.channel.getBySeverId(
      id,
      page,
      limit,
      filter,
    );

    if (result === null) {
      return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: {
          message: "Error while getting records.",
        },
      });
    }

    return reply.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
