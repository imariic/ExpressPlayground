import { Request, Response } from "express";
import { BookRepository } from "~/repositories";
import { BookService } from "~/services";

const bookRepository = new BookRepository();
const bookService = new BookService(bookRepository);

const insertBook = async (req: Request, res: Response) => {
  try {
    const insertedBook = await bookService.insert(req.body);

    res.json(insertedBook);
  } catch (err) {
    res.status(err.status);
  }
};

const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookService.getAll();

    res.json(books);
  } catch (err) {
    res.status(err.status);
  }
};

const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await bookService.getById(req.params.id);

    res.json(book);
  } catch (err) {
    res.status(err.status);
  }
};

export default {
  insertBook,
  getBooks,
  getBookById,
};
