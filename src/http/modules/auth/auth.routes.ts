import z from "zod";
import type { FastifyTypedInstance } from "../../../app/@types/handlers";
import { signIn } from "./controllers/signIn.controller";
import type { StatusCodes } from "http-status-codes";
import { signInBodySchema, signUpBodySchema } from "./auth.schemas";
import { signUp } from "./controllers/signUp.controller";

export const authRoutes = async (app: FastifyTypedInstance) => {
  app.post(
    "/signin",
    {
      schema: {
        tags: ["auth"],
        description: "Authenticate user and return an accessToken.",
        body: signInBodySchema,
        response: {
          202: z.object({
            accessToken: z.jwt(),
          }),
        },
      },
    },
    signIn,
  );

  app.post(
    "/signup",
    {
      schema: {
        tags: ["auth"],
        description: "Create an user account.",
        body: signUpBodySchema,
        response: {
          201: z.null(),
        },
      },
    },
    signUp,
  );
};
