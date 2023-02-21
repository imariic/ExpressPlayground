import { User } from "@prisma/client";

export default interface IUserRepository {
  register: (user: User) => Promise<string>;
  login: (username: string, password: string) => Promise<string | null>;
}
