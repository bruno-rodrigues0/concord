import { betterAuth } from "better-auth";
import { prisma } from "@/database/prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { randomUUIDv7 } from "bun";

export const auth = betterAuth({
  basePath: "/auth",
  trustedOrigins: ["http://localhost:5173"],
  emailAndPassword: {
    enabled: true,
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  advanced: {
    database: {
      generateId: () => {
        return randomUUIDv7();
      },
    },
  },
});
