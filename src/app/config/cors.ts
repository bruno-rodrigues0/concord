import type { FastifyCorsOptions } from "@fastify/cors";

export const corsConfig: FastifyCorsOptions = {
  origin: "0.0.0.0",
  methods: ["GET", "POST", "PUT", "DELETE"],
};
