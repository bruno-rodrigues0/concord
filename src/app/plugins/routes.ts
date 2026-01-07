import { fastifyPlugin } from "fastify-plugin";
import { userRoutes } from "@/app/modules/users/user.routes";

export const registerRoutes = fastifyPlugin(async (app) => {
  app.register(userRoutes, { prefix: "/users" });
});
