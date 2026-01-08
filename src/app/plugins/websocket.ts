import { fastifyPlugin } from "fastify-plugin";
import { fastifyWebsocket } from "@fastify/websocket";

export const registerWebsocket = fastifyPlugin(async (app) => {
  app.register(fastifyWebsocket);
});
