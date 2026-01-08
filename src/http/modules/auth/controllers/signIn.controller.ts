import { StatusCodes } from "http-status-codes";
import type { Controller } from "@/app/@types/handlers";
import type { SignInBody } from "../auth.schemas";
import type { User } from "@/app/@types/types";
import { providers } from "@/database/providers";
import { app } from "../../../../app/server";

export const signIn: Controller<{
  Body: SignInBody;
}> = async (request, reply): Promise<User | null> => {
  try {
    const result = await providers.user.getByEmail(request.body.email);

    if (result === null) {
      return reply.status(StatusCodes.UNAUTHORIZED).send({
        error: {
          message: "Invalid email or password",
        },
      });
    }

    if (result.password !== request.body.password) {
      return reply.status(StatusCodes.UNAUTHORIZED).send({
        error: {
          message: "Invalid email or password",
        },
      });
    }

    const accessToken = app.jwt.sign(
      { uid: result.id, email: result.email },
      {
        expiresIn: "7d",
      },
    );

    return reply.status(StatusCodes.ACCEPTED).send({
      accessToken,
    });
  } catch (error) {
    return reply.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error });
  }
};
