import fastifySwagger from "@fastify/swagger";
import { fastifyPlugin } from "fastify-plugin";
import { swaggerConfig } from "../config/swagger";

export const registerSwagger = fastifyPlugin(async (app) => {
  app.register(fastifySwagger, swaggerConfig);
});
