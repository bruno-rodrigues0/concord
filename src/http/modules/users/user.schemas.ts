import z from "zod";

export const createUserBodySchema = z.object({
  username: z.string().min(1),
  email: z.email().min(5).trim(),
  password: z.string().min(8),
  nickname: z.string().min(3),
});

export const updateUserParamsSchema = z.object({
  username: z.string().min(3),
});

export const updateUserBodySchema = z.object({
  username: z.optional(z.string().min(1)),
  email: z.optional(z.email().min(5).trim()),
  nickname: z.optional(z.string().min(3)),
  avatarUrl: z.optional(z.string().min(3)),
  bio: z.optional(z.string().min(1)),
});

export const getByUsernameParamsSchema = z.object({
  username: z.string().min(1),
});

export const getUserByUsernameQuerySchema = z.object({
  include_profile: z.boolean().default(false),
});

export const getAllUserServersParamsSchema = z.object({
  username: z.string().trim().min(1),
});

export const getAllUserServersQuerySchema = z.object({
  page: z.coerce.number().int().positive().min(1).default(1),
  limit: z.coerce.number().int().positive().min(1).default(25),
  filter: z.string().min(1).default(""),
});

export const createDirectChannelBodySchema = z.object({
  userBId: z.uuid(),
});

export const createDirectChannelParamsSchema = z.object({
  username: z.string().min(3),
});

export const deleteUserParamsSchema = z.object({
  username: z.string().min(3),
});

export const getAllUserDirectsParamsSchema = z.object({
  username: z.string().min(3),
});

export const getAllUserFriendsParamsSchema = z.object({
  username: z.string().min(3),
});

export const getAllUserFriendsQuerySchema = z.object({
  filter: z.string().default(""),
});

export type CreateUserBody = z.infer<typeof createUserBodySchema>;
export type GetByUsernameParams = z.infer<typeof getByUsernameParamsSchema>;
export type GetUserBuUsernameQuery = z.infer<
  typeof getUserByUsernameQuerySchema
>;
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

export type DeleteUserParams = z.infer<typeof deleteUserParamsSchema>;
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
