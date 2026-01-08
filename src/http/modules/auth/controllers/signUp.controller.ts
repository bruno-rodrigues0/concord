import type { Controller } from "@/app/@types/handlers";
import type { SignUpBody } from "../auth.schemas";
import { StatusCodes } from "http-status-codes";
import { providers } from "../../../../database/providers";

export const signUp: Controller<{
  Body: SignUpBody;
}> = async (request, reply): Promise<null> => {
  try {
    const result = await providers.user.create(request.body);

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
