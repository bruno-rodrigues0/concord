import z from "zod";
import type { FastifyTypedInstance } from "@/app/@types/handlers";
import { getAllServersByUser } from "./controllers/getAllServersByUser.controller";
import {
  addMemberToServerBodySchema,
  createServerBodySchema,
  defaultServerParamsSchema,
  deleteServerParamsSchema,
  getAllServersByUserParamsSchema,
  updateServerBodySchema,
  updateServerMemberBodySchema,
  updateServerMemberParamsSchema,
} from "./server.schemas";
import { createServer } from "./controllers/create.controller";
import { deleteServer } from "./controllers/delete.controller";
import { updateServer } from "./controllers/update.controller";
import { authGuard } from "../../../app/plugins/auth-guard";
import { addMemberToServer } from "./controllers/addMemberToServer.controller";
import { getAllServerMembers } from "./controllers/getAllServerMembers.controller";
import { updateServerMember } from "./controllers/updateServerMember.controller";
import { getAllServerChannels } from "./controllers/getAllChannels.controller";

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

  app.post(
    "/:id/members",
    {
      schema: {
        tags: ["servers"],
        description: "Add member to server.",
        params: defaultServerParamsSchema,
        body: addMemberToServerBodySchema,
        response: {
          201: z.null().describe("Member added."),
        },
      },
    },
    addMemberToServer,
  );

  app.post(
    "/:id/members",
    {
      schema: {
        tags: ["servers"],
        description: "Add member to server.",
        params: defaultServerParamsSchema,
        body: addMemberToServerBodySchema,
        response: {
          201: z.null().describe("Member added."),
        },
      },
    },
    addMemberToServer,
  );

  app.get(
    "/:id/members",
    {
      schema: {
        tags: ["servers"],
        description: "Returns all server members.",
        params: defaultServerParamsSchema,
        response: {
          200: z.array(
            z.object({
              user: z.object({
                name: z.string(),
                id: z.string(),
                email: z.string(),
                emailVerified: z.boolean(),
                image: z.string().nullable(),
                createdAt: z.date(),
                updatedAt: z.date(),
              }),
            }),
          ),
        },
      },
    },
    getAllServerMembers,
  );

  app.put(
    "/:id/members/:userId",
    {
      schema: {
        tags: ["servers"],
        description: "Update member.",
        params: updateServerMemberParamsSchema,
        body: updateServerMemberBodySchema,
        response: {
          200: z.null().describe("Member added."),
          default: z.null(),
        },
      },
    },
    updateServerMember,
  );

  app.get(
    "/:id/channels/",
    {
      schema: {
        tags: ["servers"],
        description: "Returs all server channels.",
        params: defaultServerParamsSchema,
        response: {
          200: z.array(
            z.object({
              id: z.string(),
              type: z.string(),
              title: z.string(),
              serverId: z.string(),
              position: z.coerce.number(),
            }),
          ),
        },
      },
    },
    getAllServerChannels,
  );
};
