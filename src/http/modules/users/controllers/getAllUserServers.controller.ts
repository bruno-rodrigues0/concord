import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";
import type {
  GetAllUserServersParams,
  GetAllUserServersQuery,
} from "../user.schemas";

export const getAllUserServers: Controller<{
  Params: GetAllUserServersParams;
  Querystring: GetAllUserServersQuery;
}> = async (request, reply) => {
  try {
    const { username } = request.params;
    const { page, limit, filter } = request.query;
    const result = await providers.serverMember.getAllServerByMember(
      username,
      page,
      limit,
      filter,
    );

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
