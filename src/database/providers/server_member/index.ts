import { create } from "./create";
import { del } from "./delete";
import { getAllMembersByServer } from "./getAllMembersByServer";
import { getAllServerByMember } from "./getAllServersByMember";
import { getById } from "./getById";
import { update } from "./update";

export const serverMemberProvider = {
  create,
  getById,
  getAllServerByMember,
  getAllMembersByServer,
  update,
  del,
};
