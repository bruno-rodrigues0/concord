import z from "zod";
import type { FastifyTypedInstance } from "@/app/@types/handlers";
import { createUser } from "./controllers/create.controller";
import {
  createUserBodySchema,
  getByUsernameParamsSchema,
} from "./user.schemas";
import { getAllUsers } from "./controllers/getAll.controller";
import { getUserByUsername } from "./controllers/getByUsername.controller";
import { authHandler } from "@/app/plugins/auth";

export const userRoutes = async (app: FastifyTypedInstance) => {
  app.register(authHandler);
  app.get(
    "/",
    {
      schema: {
        tags: ["users"],
        description: "List all users.",
        response: {
          200: z.array(
            z.object({
              id: z.string(),
              username: z.string(),
              email: z.string(),
            }),
          ),
        },
      },
    },
    getAllUsers,
  );

  app.get(
    "/:username",
    {
      schema: {
        tags: ["users"],
        description: "List users.",
        params: getByUsernameParamsSchema,
        response: {
          200: z.object({
            id: z.string(),
            username: z.string(),
            email: z.string(),
          }),
        },
      },
    },
    getUserByUsername,
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
