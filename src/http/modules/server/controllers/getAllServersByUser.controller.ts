import type { Controller } from "@/app/@types/handlers";
import { StatusCodes } from "http-status-codes";
import { providers } from "../../../../database/providers";
import type { GetAllServersByUserQuery } from "../server.schemas";

export const getAllServersByUser: Controller<{
  Querystring: GetAllServersByUserQuery;
}> = async (request, reply) => {
  try {
    const result = await providers.serverMember.getAllServerByMember(
      request.query.userId,
    );

    return result;
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
