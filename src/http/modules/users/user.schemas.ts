import z from "zod";

export const createUserBodySchema = z.object({
  username: z.string().min(1),
  email: z.email().min(5).trim(),
  password: z.string().min(8),
  nickname: z.string().min(3),
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
