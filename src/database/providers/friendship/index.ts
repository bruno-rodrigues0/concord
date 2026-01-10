import { count } from "./count";
import { create } from "./create";
import { getByRequesterId } from "./getByRequesterId";
import { getById } from "./getById";
import { update } from "./update";

export const friendshipProvider = {
  create,
  getById,
  update,
  getByRequesterId,
  count,
};
