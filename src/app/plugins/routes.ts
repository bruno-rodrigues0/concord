import { fastifyPlugin } from "fastify-plugin";
import { userRoutes } from "@/http/modules/users/user.routes";
import { authRoutes } from "../../http/modules/auth/auth.routes";

export const registerRoutes = fastifyPlugin(async (app) => {
  app.register(userRoutes, { prefix: "/users" });
  app.register(authRoutes, { prefix: "/auth" });
});
