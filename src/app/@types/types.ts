export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
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
