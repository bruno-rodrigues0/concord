export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
};

export type Profile = {
  id: string;
  nickname: string;
  bio?: string | null;
  avatarUrl?: string | null;
};

export type Server = {
  id: string;
  title: string;
  ownerId: string;
};

export type Friendship = {
  requesterId: string;
  addresseeId: string;
  requestedAt: Date;
  state: "PENDING" | "ACCEPTED" | "REJECTED" | "BLOCKED";
  rejectedAt: Date | null;
  acceptedAt: Date | null;
};

export type ServerMember = {
  serverId: string;
  userId: string;
  role: "ADMIN" | "MEMBER" | "MOD";
  banned: boolean;
  muted: boolean;
};

export type Channel = {
  id: string;
  title: string;
  serverId: string;
  position: number;
  type: "TEXT" | "VOICE";
};

export type DirectChannel = {
  id: string;
  userAId: string;
  userBId: string;
};
