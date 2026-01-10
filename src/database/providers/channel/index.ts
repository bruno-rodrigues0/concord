import { count } from "./count";
import { create } from "./create";
import { del } from "./delete";
import { getAll } from "./getAll";
import { getById } from "./getById";
import { getBySeverId } from "./getByServerId";
import { update } from "./update";

export const channelProvider = {
  create,
  getById,
  update,
  del,
  getAll,
  getBySeverId,
  count,
};
