import { fastifyPlugin } from "fastify-plugin";
import { fastifyWebsocket } from "@fastify/websocket";
import { registry } from "../../websocket/registry";
import { handleChannelJoin } from "../../websocket/handlers/channel";
import { handleDirectJoin } from "../../websocket/handlers/direct";
import { dispatcher } from "../../websocket/handlers";

export const registerWebsocket = fastifyPlugin(async (app) => {
  await app.register(fastifyWebsocket);

  app.get(
    "/ws",
    {
      websocket: true,
    },
    async (socket, request) => {
      let payload: { uid: string; email: string; iat: number };

      try {
        payload = await request.jwtVerify();
      } catch {
        socket.send(
          JSON.stringify({
            error: "Unauthorized",
          }),
        );
        socket.close();
        return;
      }

      const userId = payload.uid;

      registry.addSocketToUsers(userId, socket);

      socket.send(
        JSON.stringify({
          type: "connection:ready",
          payload: { userId },
        }),
      );

      socket.on("message", (raw: Buffer) => {
        const payload = JSON.parse(raw.toString());

        dispatcher(socket, userId, payload);
      });

      socket.on("close", () => {
        console.log("Closing");
        registry.removeSocketFromUser(userId, socket);
        registry.removeSocketFromAllChannels(socket);
      });

      socket.on("direct:joined", (data: Buffer) => {
        console.log(data);
      });
    },
  );
});
