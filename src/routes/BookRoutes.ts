import { Router } from "express";
import { BookController } from "~/controllers";

const router = Router();

/**
 * @swagger
 * /create-book:
 *   post:
 *     summary: Create a book
 *     description: Create a book.
 */
router.post("/create-book", BookController.insertBook);

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     description: Get all books.
 */
router.get("/books", BookController.getBooks);

router.get("/books/:id", BookController.getBookById);
router.delete("/books/:id", BookController.deleteBook);

export default router;
