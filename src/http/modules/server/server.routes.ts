import z from "zod";
import type { FastifyTypedInstance } from "@/app/@types/handlers";
import { getAllServersByUser } from "./controllers/getAllServersByUser.controller";
import {
  createServerBodySchema,
  deleteServerParamsSchema,
  getAllServersByUserParamsSchema,
  updateServerBodySchema,
} from "./server.schemas";
import { createServer } from "./controllers/create.controller";
import { deleteServer } from "./controllers/delete.controller";
import { updateServer } from "./controllers/update.controller";
import { authGuard } from "../../../app/plugins/auth-guard";

export const serverRoutes = async (app: FastifyTypedInstance) => {
  app.register(authGuard);
  app.get(
    "/:userId",
    {
      schema: {
        tags: ["servers"],
        description: "List all servers by user id.",
        params: getAllServersByUserParamsSchema,
        response: {
          200: z.array(
            z.object({
              id: z.string(),
              title: z.string(),
              ownerId: z.string(),
            }),
          ),
        },
      },
    },
    getAllServersByUser,
  );

  app.post(
    "/",
    {
      schema: {
        description: "Create a new server.",
        tags: ["servers"],
        body: createServerBodySchema,
        response: {
          201: z.null().describe("User created."),
        },
      },
    },
    createServer,
  );

  app.put(
    "/",
    {
      schema: {
        description: "Update a server.",
        tags: ["servers"],
        body: updateServerBodySchema,
        response: {
          201: z.null().describe("User created."),
        },
      },
    },
    updateServer,
  );

  app.delete(
    "/",
    {
      schema: {
        description: "Delete a server.",
        tags: ["servers"],
        params: deleteServerParamsSchema,
        response: {
          201: z.null().describe("User created."),
        },
      },
    },
    deleteServer,
  );
};
