import { channelProvider } from "./channel";
import { directProvider } from "./direct";
import { friendshipProvider } from "./friendship";
import { profileProvider } from "./profile";
import { serverProvider } from "./server";
import { serverMemberProvider } from "./server_member";
import { userProvider } from "./user";

export const providers = {
  user: userProvider,
  profile: profileProvider,
  server: serverProvider,
  serverMember: serverMemberProvider,
  friendship: friendshipProvider,
  channel: channelProvider,
  direct: directProvider,
};
