import { count } from "./count";
import { getAll } from "./getAll";
import { getByEmail } from "./getByEmail";
import { getById } from "./getById";
import { getByUsername } from "./getByUsername";
import { update } from "./update";

export const userProvider = {
  getById,
  getByUsername,
  getAll,
  count,
  getByEmail,
  update,
};
