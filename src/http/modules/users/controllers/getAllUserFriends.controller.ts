import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";
import type {
  GetAllUserFriendsParams,
  GetAllUserFriendsQuery,
} from "../user.schemas";

export const getAllUserFriends: Controller<{
  Querystring: GetAllUserFriendsQuery;
  Params: GetAllUserFriendsParams;
}> = async (request, reply) => {
  try {
    const { username } = request.params;
    const { filter } = request.query;
    const result = await providers.friendship.getByRequesterId(
      username,
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
