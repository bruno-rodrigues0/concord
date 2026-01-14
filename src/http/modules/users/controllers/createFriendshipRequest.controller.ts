import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";
import type {
  CreateFriendshipRequestBody,
  CreateFriendshipRequestParams,
} from "../user.schemas";

export const createFriendshipRequest: Controller<{
  Params: CreateFriendshipRequestParams;
  Body: CreateFriendshipRequestBody;
}> = async (request, reply) => {
  try {
    const { addresseeId } = request.body;
    const { id } = request.params;
    const result = await providers.friendship.create(id, addresseeId);

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
