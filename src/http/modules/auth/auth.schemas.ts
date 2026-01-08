import z from "zod";

export const signInBodySchema = z.object({
  email: z.email().min(5),
  password: z.string().min(8),
});

export const signUpBodySchema = z.object({
  email: z.email().min(5),
  username: z.string().trim().lowercase().min(3),
  password: z.string().min(8),
  nickname: z.string(),
});

export type SignInBody = z.infer<typeof signInBodySchema>;
export type SignUpBody = z.infer<typeof signUpBodySchema>;
