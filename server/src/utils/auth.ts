// @ts-ignore
import bcrypt from "bcrypt";
// @ts-ignore
import jwt from "jsonwebtoken";

export const encryptPassword = (password: string) => {
  return bcrypt.hashSync(password, Number(process.env.SALT_ROUND));
};

export const decryptPassword = async (
  password: string,
  cryptedPassword: string
) => {
  return bcrypt.compare(password, cryptedPassword);
};

export const generateToken = async (data: object) => {
  return jwt.sign(data, process.env.JWT_SECRET_KEY, {
    expiresIn: "2h",
  });
};
