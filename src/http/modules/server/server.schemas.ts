import z from "zod";

export const createServerBodySchema = z.object({
  title: z.string().min(3),
  ownerId: z.string(),
});

export const deleteServerParamsSchema = z.object({
  id: z.string(),
});

export const getAllServersByUserParamsSchema = z.object({
  userId: z.string(),
});

export const getServerByIdParamsSchema = z.object({
  id: z.uuid(),
});

export const updateServerParamsSchema = z.object({
  id: z.uuid(),
});

export const updateServerBodySchema = z.object({
  title: z.optional(z.string().min(3)),
});

export type CreateServerBody = z.infer<typeof createServerBodySchema>;
export type DeleteServerParams = z.infer<typeof deleteServerParamsSchema>;
export type GetAllServersByUserQuery = z.infer<
  typeof getAllServersByUserParamsSchema
>;
export type GetServerByIdParams = z.infer<typeof getServerByIdParamsSchema>;
export type UpdateServerParams = z.infer<typeof updateServerParamsSchema>;
export type UpdateServerBody = z.infer<typeof updateServerBodySchema>;
