import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";
import type {
  UpdateFriendshipRequestBody,
  UpdateFriendshipRequestParams,
} from "../user.schemas";

export const updateFriendshipRequest: Controller<{
  Params: UpdateFriendshipRequestParams;
  Body: UpdateFriendshipRequestBody;
}> = async (request, reply) => {
  try {
    const { id, addresseeId } = request.params;
    const data = request.body;

    const result = await providers.friendship.update(id, addresseeId, data);

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
