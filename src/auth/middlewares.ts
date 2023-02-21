import { Request, Response, NextFunction } from "express";

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;
  const NOT_AUTH = 401;

  if (!bearer) {
    res.status(NOT_AUTH);

    return res.send("Not Authorized!");
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(NOT_AUTH);

    return res.send("Not Authorized!");
  }
};
