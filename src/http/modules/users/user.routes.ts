import z from "zod";
import type { FastifyTypedInstance } from "@/app/@types/handlers";
import { createUser } from "./controllers/createUser.controller";
import {
  createUserBodySchema,
  getAllUserServersParamsSchema,
  getByUsernameParamsSchema,
} from "./user.schemas";
import { getAllUsers } from "./controllers/getAllUsers.controller";
import { getUserByUsername } from "./controllers/getUserByUsername.controller";
import { authHandler } from "@/app/plugins/auth";
import { getAllServersByUserQuerySchema } from "../server/server.schemas";
import { getAllUserServers } from "./controllers/getAllUserServers.controller";

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

  app.get(
    "/:username/servers",
    {
      schema: {
        tags: ["users"],
        description: "List all user servers.",
        params: getAllUserServersParamsSchema,
        querystring: getAllServersByUserQuerySchema,
        response: {
          200: z.array(
            z.object({
              server: z.object({
                id: z.string(),
                title: z.string(),
                ownerId: z.string(),
              }),
            }),
          ),
        },
      },
    },
    getAllUserServers,
  );
};
