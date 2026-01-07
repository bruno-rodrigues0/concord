import { jsonSchemaTransform } from "fastify-type-provider-zod";
import type { FastifyDynamicSwaggerOptions } from "@fastify/swagger";

export const swaggerConfig: FastifyDynamicSwaggerOptions = {
  openapi: {
    info: {
      title: "Fastify + Swagger API",
      description: "Test API to learn fastify and swagger",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
};
