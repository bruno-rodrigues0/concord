import type { WebSocket } from "@fastify/websocket";
import type { Payload } from "../protocol";
import { handleChannelJoin } from "./channel";
import { handleDirectJoin } from "./direct";

export const dispatcher = (socket: WebSocket, userId: string, raw: Payload) => {
  switch (raw.type) {
    case "channel:join":
      handleChannelJoin(socket, userId, raw.payload);
      break;

    case "direct:join":
      handleDirectJoin(socket, userId, raw.payload);
      break;

    default:
      break;
  }
};
