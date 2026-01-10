import fastifyPlugin from "fastify-plugin";
import { StatusCodes } from "http-status-codes";

export const authHandler = fastifyPlugin(async (app) => {
  app.addHook("onRequest", async (request, reply) => {
    let decodedToken: { uid: string; email: string; iat: number };

    if (!request.headers.authorization) {
      return reply.status(StatusCodes.UNAUTHORIZED).send({
        error: {
          message: "Access denied.",
        },
      });
    }

    try {
      decodedToken = await request.jwtVerify();
    } catch (error) {
      return reply.status(StatusCodes.UNAUTHORIZED).send({
        error: {
          message: "Invalid token.",
        },
      });
    }
  });
});
