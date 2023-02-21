import { Request, Response } from "express";
import { UserRepository } from "~/repositories";
import { UserService } from "~/services";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const loggedInUser = await userService.login(username, password);

    res.json(loggedInUser);
  } catch (err) {
    res.status(err.status);
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const registeredUser = await userService.register(req.body);

    res.json(registeredUser);
  } catch (err) {
    res.status(err.status);
  }
};

export default {
  login,
  register,
};
