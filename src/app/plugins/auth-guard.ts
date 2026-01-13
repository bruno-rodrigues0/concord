import { fastifyPlugin } from "fastify-plugin";
import { auth } from "./auth";
import { StatusCodes } from "http-status-codes";

export const authGuard = fastifyPlugin(async (app) => {
  app.addHook("preHandler", async (request, reply) => {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      return reply.status(StatusCodes.UNAUTHORIZED).send({
        error: {
          message: "Access denied.",
        },
      });
    }

    request.user = session.user;
  });
});
