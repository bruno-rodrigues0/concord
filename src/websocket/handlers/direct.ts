import type { WebSocket } from "@fastify/websocket";
import type { Payload } from "../protocol";

export const handleDirectJoin = (
  socket: WebSocket,
  userId: string,
  payload: any,
) => {
  const { directId } = payload;
  socket.send(
    JSON.stringify({
      type: "direct:joined",
      payload: {
        directId,
      },
    }),
  );
};
