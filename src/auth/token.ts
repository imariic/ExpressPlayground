import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

export const createJWT = (user: User) => {
  const { id, firstName, lastName } = user;

  const token = jwt.sign({ id, firstName, lastName }, "secret");

  return token;
};
