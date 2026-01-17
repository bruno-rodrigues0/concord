import z from "zod";

const defaultServerParamsSchema = z.object({
  id: z.uuid(),
});

const defaultServerQuerySchema = z.object({
  page: z.coerce.number().int().positive().min(1).default(1),
  limit: z.coerce.number().int().positive().min(1).default(25),
  filter: z.string().default("").describe("User filter."),
});

export const createServerBodySchema = z.object({
  title: z.string().min(3),
  ownerId: z.string(),
});

export const deleteServerParamsSchema = defaultServerParamsSchema;

export const getAllServersByUserParamsSchema = z.object({
  userId: z.string(),
});

export const getServerByIdParamsSchema = defaultServerParamsSchema;

export const updateServerParamsSchema = defaultServerParamsSchema;

export const updateServerBodySchema = z.object({
  title: z.optional(z.string().min(3)),
});

export const addMemberToServerBodySchema = z.object({
  userId: z.uuid(),
});

export const getAllServerMembersParamsSchema = defaultServerParamsSchema;
export const getAllServerMembersQuerySchema = defaultServerQuerySchema;

export type CreateServerBody = z.infer<typeof createServerBodySchema>;
export type DeleteServerParams = z.infer<typeof deleteServerParamsSchema>;
export type GetAllServersByUserQuery = z.infer<
  typeof getAllServersByUserParamsSchema
>;
export type GetServerByIdParams = z.infer<typeof getServerByIdParamsSchema>;
export type UpdateServerParams = z.infer<typeof updateServerParamsSchema>;
export type UpdateServerBody = z.infer<typeof updateServerBodySchema>;
export type GetAllServerMembersParams = z.infer<
  typeof getAllServerMembersParamsSchema
>;
export type GetAllServerMembersQuery = z.infer<
  typeof getAllServerMembersQuerySchema
>;
export type DefaultServerParams = z.infer<typeof defaultServerParamsSchema>;
export type DefaultServerQuery = z.infer<typeof defaultServerQuerySchema>;
export type AddMemberToServerBody = z.infer<typeof addMemberToServerBodySchema>;
