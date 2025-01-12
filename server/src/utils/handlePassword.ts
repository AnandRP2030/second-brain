import bcrypt, { hash } from "bcrypt";
const saltRounds = 10;
export const hashedPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const verifyPasswords = async (
  hashedPassword: string,
  password: string
): Promise<boolean> => {
  const isSame = await bcrypt.compare(hashedPassword, password);
  return isSame;
};
