// import { count } from "./count";
import { create } from "./create";
import { del } from "./delete";
import { getAll } from "./getAll";
// import { getByEmail } from "./getByEmail";
import { getById } from "./getById";
import { update } from "./update";
// import { getByUsername } from "./getByUsername";

export const serverProvider = {
  create,
  getById,
  // getByUsername,
  getAll,
  del,
  update,
  // count,
  // getByEmail,
};
