import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";
import type { GetAllUsers } from "../user.schemas";

export const getAllUsers: Controller<{
  Querystring: GetAllUsers;
}> = async (request, reply) => {
  try {
    const { filter, page, limit } = request.query;
    const result = await providers.user.getAll(page, limit, filter);

    if (result === null) {
      return reply.status(StatusCodes.NOT_FOUND).send({
        error: {
          message: "Record not found.",
        },
      });
    }

    reply.header("access-control-expose-headers", "x-total-count");
    reply.header(
      "x-total-count",
      (await providers.user.count(filter)).toString(),
    );

    return reply.status(StatusCodes.OK).send(result);
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
