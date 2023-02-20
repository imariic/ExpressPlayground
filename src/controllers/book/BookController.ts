import { Request, Response } from "express";
import { BookRepository } from "../../repositories";
import { BookService } from "../../services";

const bookRepository = new BookRepository();
const bookService = new BookService(bookRepository);

const insertBook = async (req: Request, res: Response) => {
  console.log(req.body, "request");
  try {
    bookService.insert(req.body);

    res.json({ message: "Kreirana knjiga" });
  } catch (err) {
    res.status(err.status).json({ message: "errror" });
  }
};

const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookService.getAll();
    console.log(books, "KNJIZICE");
    res.json(books);
  } catch (err) {
    res.status(err.status).json({ message: "error" });
  }
};

const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await bookService.getById(req.params.id);

    res.json(book);
  } catch (err) {
    res.status(err.status).json({ message: "err" });
  }
};

export default {
  insertBook,
  getBooks,
  getBookById,
};
