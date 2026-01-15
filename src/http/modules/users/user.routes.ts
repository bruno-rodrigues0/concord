import z from "zod";
import type { FastifyTypedInstance } from "@/app/@types/handlers";
import {
  createFriendshipRequestBodySchema,
  createFriendshipRequestParamsSchema,
  getAllUserDirectsQuerySchema,
  getAllUserFriendsParamsSchema,
  getAllUserServersParamsSchema,
  getAllUsersQuerySchema,
  updateFriendshipRequestBodySchema,
  updateFriendshipRequestParamsSchema,
  updateUserBodySchema,
  updateUserParamsSchema,
} from "./user.schemas";
import { getAllUsers } from "./controllers/getAllUsers.controller";
import { getAllServersByUserParamsSchema } from "../server/server.schemas";
import { getAllUserServers } from "./controllers/getAllUserServers.controller";
import { authGuard } from "@/app/plugins/auth-guard";
import { getAllUserDirects } from "./controllers/getAllUserDirects.controller";
import { getAllUserFriends } from "./controllers/getAllUserFriends.controller";
import { updateUser } from "./controllers/updateUser.controller";
import { createFriendshipRequest } from "./controllers/createFriendshipRequest.controller";
import { updateFriendshipRequest } from "./controllers/updateFriendshipRequest.controller";

export const userRoutes = async (app: FastifyTypedInstance) => {
  app.register(authGuard);
  app.get(
    "/",
    {
      schema: {
        tags: ["users"],
        description: "List all users.",
        querystring: getAllUsersQuerySchema,
        response: {
          200: z.array(
            z.object({
              id: z.string(),
              name: z.string(),
              email: z.string(),
              emailVerified: z.boolean(),
              image: z.string().nullable(),
              createdAt: z.date(),
              updatedAt: z.date(),
            }),
          ),
        },
      },
    },
    getAllUsers,
  );

  app.put(
    "/:id",
    {
      schema: {
        tags: ["users"],
        description: "Update user.",
        params: updateUserParamsSchema,
        body: updateUserBodySchema,
        response: {
          200: z.null().describe("User updated."),
        },
      },
    },
    updateUser,
  );

  app.get(
    "/:id/servers",
    {
      schema: {
        tags: ["users"],
        description: "List all user servers.",
        params: getAllUserServersParamsSchema,
        querystring: getAllServersByUserParamsSchema,
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

  app.get(
    "/:id/directs",
    {
      schema: {
        tags: ["users"],
        description: "Get all user direct channels.",
        querystring: getAllUserDirectsQuerySchema,
      },
    },
    getAllUserDirects,
  );

  app.get(
    "/:id/friends",
    {
      schema: {
        tags: ["users"],
        description: "Get all user friend requests.",
        params: getAllUserFriendsParamsSchema,
        querystring: getAllServersByUserParamsSchema,
        response: {
          200: z.array(
            z.object({
              requesterId: z.string(),
              addresseeId: z.string(),
              requestedAt: z.date(),
              state: z.enum(["PENDING", "ACCEPTED", "REJECTED", "BLOCKED"]),
              rejectedAt: z.date().nullable(),
              acceptedAt: z.date().nullable(),
            }),
          ),
        },
      },
    },
    getAllUserFriends,
  );

  app.post(
    "/:id/friends/:addresseeId",
    {
      schema: {
        tags: ["users"],
        description: "Send a friendship invitation.",
        body: createFriendshipRequestBodySchema,
        params: createFriendshipRequestParamsSchema,
        response: {
          200: z.null().describe("Request sended."),
        },
      },
    },
    createFriendshipRequest,
  );

  app.put(
    "/:id/friends/:addresseeId",
    {
      schema: {
        tags: ["users"],
        description: "Update a friendship request state.",
        params: updateFriendshipRequestParamsSchema,
        body: updateFriendshipRequestBodySchema,
        response: {
          200: z.null().describe("Friendship state updated."),
        },
      },
    },
    updateFriendshipRequest,
  );
};
