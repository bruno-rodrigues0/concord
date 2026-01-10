export type Payload = {
  type: string;
  payload: {};
};

export type ServerJoin = {
  payload: {
    userId: string;
    serverId: string;
  };
  response: ServerJoined | null;
};

export type ServerJoined = {
  payload: {};
};
