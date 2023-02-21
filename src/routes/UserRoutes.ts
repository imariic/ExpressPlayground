import { Router } from "express";
import { UserController } from "~/controllers";

const router = Router();

router.post("/login", UserController.login);
router.get("/register", UserController.register);

export default router;
