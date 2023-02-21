import { User } from "@prisma/client";
import { comparePasswords, createJWT, hashPassword } from "~/auth";
import db from "~/db";
import IUserRepository from "./IUserRepository";

export default class UserRepository implements IUserRepository {
  async register(user: User) {
    const createdUser = await db.user.create({
      data: {
        ...user,
        password: await hashPassword(user.password),
      },
    });

    const token = createJWT(createdUser);

    return token;
  }

  async login(username: string, password: string) {
    const user = await db.user.findFirst({
      where: {
        username,
      },
    });

    const isValid = await comparePasswords(password, user.password);

    if (!isValid) return null;

    const token = createJWT(user);

    return token;
  }
}
