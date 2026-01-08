import type { FastifyJWTOptions } from "@fastify/jwt";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is missing.");
}

export const jwtConfig: FastifyJWTOptions = {
  secret: JWT_SECRET,
};
