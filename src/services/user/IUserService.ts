import { User } from "@prisma/client";

export default interface IUserService {
  register: (user: User) => Promise<string>;
  login: (username: string, password: string) => Promise<string | null>;
}
