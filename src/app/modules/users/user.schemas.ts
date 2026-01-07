import z from "zod";

export const createUserBodySchema = z.object({
  username: z.string().min(1),
  email: z.email().min(5).trim(),
  password: z.string().min(8),
});

export const getByIdParamsSchema = z.object({
  id: z.coerce.number().int().positive().min(1),
});

export type CreateUserBody = z.infer<typeof createUserBodySchema>;
export type GetByIdParams = z.infer<typeof getByIdParamsSchema>;
