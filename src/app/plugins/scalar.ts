import { fastifyPlugin } from "fastify-plugin";
import ScalarApiReference from "@scalar/fastify-api-reference";
import { scalarConfig } from "../config/scalar";

export const registerScalar = fastifyPlugin(async (app) => {
  app.register(ScalarApiReference, scalarConfig);
});
