import { StatusCodes } from "http-status-codes";
import type { Controller } from "../../../@types/handlers";
import { providers } from "../../../database/providers";
import type { CreateUserBody } from "../user.schemas";

export const createUser: Controller<{
  Body: CreateUserBody;
}> = async (request, reply) => {
  try {
    const result = await providers.user.create(request.body);

    if (result === null) {
    }

    return reply.status(StatusCodes.CREATED).send();
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
