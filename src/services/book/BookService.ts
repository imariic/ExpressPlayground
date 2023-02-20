import { Book } from "@prisma/client";
import { IBookRepository } from "~/repositories";
import IBookService from "./IBookService";

export default class BookService implements IBookService {
  private _bookRepository: IBookRepository;

  constructor(bookRepository: IBookRepository) {
    this._bookRepository = bookRepository;
  }

  async getAll(): Promise<Book[]> {
    const books = await this._bookRepository.getAll();

    return books;
  }

  async getById(id: string): Promise<Book> {
    const book = await this._bookRepository.getById(id);

    return book;
  }

  async insert(book: Book): Promise<Book> {
    const insertedBook = await this._bookRepository.insert(book);

    return insertedBook;
  }
}
