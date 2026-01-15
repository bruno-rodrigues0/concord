import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";
import type { GetAllUserDirectsQuery } from "../user.schemas";

export const getAllUserDirects: Controller<{
  Querystring: GetAllUserDirectsQuery;
}> = async (request, reply) => {
  try {
    const { page, limit, filter } = request.query;
    const result = await providers.direct.getAll(page, limit, filter);

    if (result === null) {
    }

    return reply.status(StatusCodes.OK).send(result);
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
