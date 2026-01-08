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
