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

export const getAllUserDirectsParamsSchema = defaultUserParamsSchema;

export const getAllUserFriendsParamsSchema = defaultUserParamsSchema;

export const getAllUserFriendsQuerySchema = z.object({
  filter: z.string().default(""),
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
export type GetAllUserDirectsParams = z.infer<
  typeof getAllUserDirectsParamsSchema
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
