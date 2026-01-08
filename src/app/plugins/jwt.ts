import fastifyPlugin from "fastify-plugin";
import { fastifyJwt } from "@fastify/jwt";
import { jwtConfig } from "../config/jwt";

export const registerRoutes = fastifyPlugin(async (app) => {
  app.register(fastifyJwt, jwtConfig);
});
