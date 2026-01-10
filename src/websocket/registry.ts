// maps userId->sockets
// maps channelId->sockets

import type { WebSocket } from "@fastify/websocket";

class WsResgistry {
  private users = new Map<string, Set<WebSocket>>();
  private channels = new Map<string, Set<WebSocket>>();

  addSocketToUsers(userId: string, socket: WebSocket) {
    if (!this.users.has(userId)) {
      this.users.set(userId, new Set());
    }

    this.users.get(userId)!.add(socket);
  }

  removeSocketFromUser(userId: string, socket: WebSocket) {
    const set = this.users.get(userId);
    if (!set) return;

    set.delete(socket);
    if (set.size === 0) {
      this.users.delete(userId);
    }
  }

  getUserSockets(userId: string) {
    return this.users.get(userId) ?? new Set();
  }

  addSocketToChannel(channelId: string, socket: WebSocket) {
    if (!this.channels.has(channelId)) {
      this.channels.set(channelId, new Set());
    }

    this.channels.get(channelId)!.add(socket);
  }

  removeSocketFromAllChannels(socket: WebSocket) {
    for (const sockets of this.channels.values()) {
      sockets.delete(socket);
    }
  }
}

export const registry = new WsResgistry();
