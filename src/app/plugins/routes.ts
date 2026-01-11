import { fastifyPlugin } from "fastify-plugin";
import { userRoutes } from "@/http/modules/users/user.routes";
import { authRoutes } from "../../http/modules/auth/auth.routes";
import { serverRoutes } from "../../http/modules/server/server.routes";

export const registerRoutes = fastifyPlugin(async (app) => {
  app.register(userRoutes, { prefix: "/users" });
  app.register(authRoutes, { prefix: "/auth" });
  app.register(serverRoutes, { prefix: "/servers" });
});
