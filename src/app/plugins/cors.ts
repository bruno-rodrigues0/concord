import fastifyCors from "@fastify/cors";
import { fastifyPlugin } from "fastify-plugin";
import { corsConfig } from "../config/cors";

export const registerCors = fastifyPlugin(async (app) => {
  app.register(fastifyCors, corsConfig);
});
