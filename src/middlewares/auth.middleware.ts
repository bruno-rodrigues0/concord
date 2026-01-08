import type { Controller } from "../app/@types/handlers";

export const authenticate: Controller<{}> = async (request, reply) => {
  try {
    await request.jwtVerify();
  } catch (error) {
    reply.send({ error });
  }
};
