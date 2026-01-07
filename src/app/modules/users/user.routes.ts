import z from "zod";
import type { FastifyTypedInstance } from "@/app/@types/handlers";
import { createUser } from "./controllers/create.controller";
import { createUserBodySchema, getByIdParamsSchema } from "./user.schemas";
import { getUserById } from "./controllers/getById.controller";

export const userRoutes = async (app: FastifyTypedInstance) => {
  app.get(
    "/:id",
    {
      schema: {
        tags: ["users"],
        description: "List users.",
        params: getByIdParamsSchema,
        response: {
          200: z.object({
            id: z.number(),
            username: z.string(),
            email: z.string(),
          }),
        },
      },
    },
    getUserById,
  );

  app.post(
    "/",
    {
      schema: {
        description: "Create a new user",
        tags: ["users"],
        body: createUserBodySchema,
        response: {
          201: z.null().describe("User created."),
        },
      },
    },
    createUser,
  );
};
