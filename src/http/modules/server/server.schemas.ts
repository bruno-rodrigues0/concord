import z from "zod";

export const createServerBodySchema = z.object({
  title: z.string().min(3),
  ownerId: z.uuid(),
});

export const deleteServerParamsSchema = z.object({
  id: z.uuid(),
});

export const getAllServersByUserQuerySchema = z.object({
  userId: z.uuid(),
});

export type CreateServerBody = z.infer<typeof createServerBodySchema>;
export type DeleteServerParams = z.infer<typeof deleteServerParamsSchema>;
export type GetAllServersByUserQuery = z.infer<
  typeof getAllServersByUserQuerySchema
>;
