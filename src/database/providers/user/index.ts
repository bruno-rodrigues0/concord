import { count } from "./count";
import { getAll } from "./getAll";
import { getByEmail } from "./getByEmail";
import { getById } from "./getById";
import { update } from "./update";

export const userProvider = {
  getById,
  getAll,
  count,
  getByEmail,
  update,
};
