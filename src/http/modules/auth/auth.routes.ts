import type { FastifyTypedInstance } from "@/app/@types/handlers";
import { handler } from "./controllers/auth.controller";
import type { FastifyPluginAsync } from "fastify";

export const authRoutes: FastifyPluginAsync = async (
  app: FastifyTypedInstance,
) => {
  app.route({
    method: ["GET", "POST"],
    url: "/*",
    schema: {
      tags: ["auth"],
      description: "Authentication routes.",
    },
    handler,
  });
};
