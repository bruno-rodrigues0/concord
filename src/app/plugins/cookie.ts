import { fastifyPlugin } from "fastify-plugin";
import { fastifyCookie } from "@fastify/cookie";

export const registerCookie = fastifyPlugin(async (app) => {
  app.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET,
  });
});
