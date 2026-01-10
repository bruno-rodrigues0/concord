import type { WebSocket } from "@fastify/websocket";
import { providers } from "../../database/providers";
import { registry } from "../registry";

export const handleChannelJoin = async (
  socket: WebSocket,
  userId: string,
  payload: any,
) => {
  const { channelId } = payload;

  try {
    const channel = await providers.channel.getById(channelId);

    if (!channel) {
      socket.send(
        JSON.stringify({
          type: "error",
          payload: {
            message: "Channel not found.",
          },
        }),
      );
      return;
    }

    const member = await providers.serverMember.getById(
      channel.serverId,
      userId,
    );

    if (!member) {
      socket.send(
        JSON.stringify({
          type: "error",
          payload: {
            message: "Access denied.",
          },
        }),
      );
      return;
    }

    registry.addSocketToChannel(channelId, socket);

    socket.send(
      JSON.stringify({
        type: "channel:joined",
        payload: {
          channelId,
        },
      }),
    );
  } catch (error) {
    console.log(error);
  }
};
