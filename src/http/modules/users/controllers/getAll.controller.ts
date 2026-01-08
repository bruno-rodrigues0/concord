import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import { providers } from "@/database/providers";

export const getAllUsers: Controller<{}> = async (_, reply) => {
  try {
    const result = await providers.user.getAll();

    if (result === null) {
      return reply.status(StatusCodes.NOT_FOUND).send({
        error: {
          message: "Record not found.",
        },
      });
    }

    reply.header("access-control-expose-headers", "x-total-count");
    reply.header("x-total-count", (await providers.user.count()).toString());

    return reply.status(StatusCodes.OK).send(result);
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
