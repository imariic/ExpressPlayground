import { User } from "@prisma/client";
import { IUserRepository } from "~/repositories";
import IUserService from "./IUserService";

export default class UserService implements IUserService {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  register(user: User): Promise<string> {
    return this._userRepository.register(user);
  }

  login(username: string, password: string): Promise<string> {
    return this._userRepository.login(username, password);
  }
}
