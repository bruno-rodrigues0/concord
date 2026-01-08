import { jsonSchemaTransform } from "fastify-type-provider-zod";
import type { FastifyDynamicSwaggerOptions } from "@fastify/swagger";

export const swaggerConfig: FastifyDynamicSwaggerOptions = {
  openapi: {
    info: {
      title: "Web Online Chat",
      description: "A online web chat.",
      version: "0.0.1",
    },
  },
  transform: jsonSchemaTransform,
};
