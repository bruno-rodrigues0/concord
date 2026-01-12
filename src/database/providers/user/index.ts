import { count } from "./count";
import { create } from "./create";
import { del } from "./delete";
import { getAll } from "./getAll";
import { getByEmail } from "./getByEmail";
import { getById } from "./getById";
import { getByUsername } from "./getByUsername";
import { update } from "./update";

export const userProvider = {
  create,
  getById,
  getByUsername,
  getAll,
  count,
  getByEmail,
  del,
  update,
};
