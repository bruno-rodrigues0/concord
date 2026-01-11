import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import type {
  GetByUsernameParams,
  GetUserBuUsernameQuery,
} from "../user.schemas";
import { providers } from "@/database/providers";

export const getUserByUsername: Controller<{
  Params: GetByUsernameParams;
  Querystring: GetUserBuUsernameQuery;
}> = async (request, reply) => {
  try {
    const { username } = request.params;
    const { include_profile } = request.query;
    const result = await providers.user.getByUsername(
      username,
      include_profile,
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
