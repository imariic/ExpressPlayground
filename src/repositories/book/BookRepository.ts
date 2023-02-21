import { Book } from "@prisma/client";
import IBookRepository from "./IBookRepository";
import db from "~/db";

export default class BookRepository implements IBookRepository {
  async getAll(): Promise<Book[]> {
    const books = await db.book.findMany();

    return books;
  }
  async getById(id: string): Promise<Book> {
    const book = await db.book.findFirst({
      where: {
        id,
      },
    });

    return book;
  }

  async insert(book: Book): Promise<Book> {
    const insertedBook = await db.book.create({
      data: book,
    });

    return insertedBook;
  }

  async delete(id: string): Promise<Book> {
    const deletedBook = await db.book.delete({
      where: {
        id,
      },
    });

    return deletedBook;
  }
}
