import z from "zod";

const defaultUserParamsSchema = z.object({
  id: z.uuid(),
});

const defaultUserQuerySchema = z.object({
  page: z.coerce.number().int().positive().min(1).default(1),
  limit: z.coerce.number().int().positive().min(1).default(25),
  filter: z.string().default("").describe("User filter."),
});

export const getAllUsersQuerySchema = z.object({
  page: z.coerce.number().int().positive().min(1).default(1),
  limit: z.coerce.number().int().positive().min(1).default(25),
  filter: z.string().default("").describe("User filter."),
});

export const updateUserParamsSchema = defaultUserParamsSchema;

export const updateUserBodySchema = z.object({
  name: z.optional(z.string().min(1)),
  email: z.optional(z.email().min(5).trim()),
  emailVerified: z.optional(z.boolean()),
  image: z.optional(z.string()),
  createdAt: z.optional(z.date()),
  updatedAt: z.optional(z.date()),
});

export const getAllUserServersParamsSchema = defaultUserParamsSchema;

export const getAllUserServersQuerySchema = z.object({
  page: z.coerce.number().int().positive().min(1).default(1),
  limit: z.coerce.number().int().positive().min(1).default(25),
  filter: z.string().default("").describe("User filter."),
});

export const createDirectChannelBodySchema = z.object({
  userBId: z.uuid(),
});

export const createDirectChannelParamsSchema = defaultUserParamsSchema;

export const getAllUserDirectsQuerySchema = defaultUserQuerySchema;

export const getAllUserFriendsParamsSchema = defaultUserParamsSchema;

export const getAllUserFriendsQuerySchema = defaultUserQuerySchema;

export const createFriendshipRequestParamsSchema = defaultUserParamsSchema;
export const createFriendshipRequestBodySchema = z.object({
  addresseeId: z.uuid(),
});

export const updateFriendshipRequestParamsSchema = z.object({
  id: z.uuid(),
  addresseeId: z.uuid(),
});

export const updateFriendshipRequestBodySchema = z.object({
  state: z.optional(z.enum(["PENDING", "ACCEPTED", "REJECTED", "BLOCKED"])),
  rejectedAt: z.optional(z.date().nullable()),
  acceptedAt: z.optional(z.date().nullable()),
});

export type GetAllUserServersQuery = z.infer<
  typeof getAllUserServersQuerySchema
>;
export type GetAllUserServersParams = z.infer<
  typeof getAllUserServersParamsSchema
>;
export type CreateDirectChannelBody = z.infer<
  typeof createDirectChannelBodySchema
>;
export type CreateDirectChannelParams = z.infer<
  typeof createDirectChannelParamsSchema
>;
export type GetAllUserDirectsQuery = z.infer<
  typeof getAllUserDirectsQuerySchema
>;
export type GetAllUserFriendsParams = z.infer<
  typeof getAllUserFriendsParamsSchema
>;
export type GetAllUserFriendsQuery = z.infer<
  typeof getAllUserFriendsQuerySchema
>;
export type UpdateUserParams = z.infer<typeof updateUserParamsSchema>;
export type UpdateUserBody = z.infer<typeof updateUserBodySchema>;
export type GetAllUsers = z.infer<typeof getAllUsersQuerySchema>;
export type CreateFriendshipRequestParams = z.infer<
  typeof createFriendshipRequestParamsSchema
>;
export type CreateFriendshipRequestBody = z.infer<
  typeof createFriendshipRequestBodySchema
>;

export type UpdateFriendshipRequestParams = z.infer<
  typeof updateFriendshipRequestParamsSchema
>;
export type UpdateFriendshipRequestBody = z.infer<
  typeof updateFriendshipRequestBodySchema
>;
