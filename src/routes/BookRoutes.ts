import { Router } from "express";
import { BookController } from "~/controllers";

const router = Router();

router.post("/create-book", BookController.insertBook);
router.get("/books", BookController.getBooks);
router.get("/books/:id", BookController.getBookById);

export default router;
