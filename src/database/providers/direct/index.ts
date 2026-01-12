import { count } from "./count";
import { create } from "./create";
import { del } from "./delete";
import { getAll } from "./getAll";
import { getById } from "./getById";

export const directProvider = {
  create,
  getById,
  del,
  getAll,
  count,
};
