import * as bcrypt from "bcryptjs";

const SALT_RANDOMS = 10;

const encrypt = async (password: string): Promise<string | void> => {
  const salt = await bcrypt.genSalt(SALT_RANDOMS);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

const compare = async (
  password: string,
  hash: string,
): Promise<boolean | void> => {
  const isValid = await bcrypt.compare(password, hash);

  return isValid;
};

export const bcryptService = {
  encrypt,
  compare,
};
