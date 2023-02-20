import { Book } from "@prisma/client";

export default interface IBookRepository {
  getAll: () => Promise<Book[]>;
  getById: (id: string) => Promise<Book>;
  insert: (book: Book) => Promise<Book>;
}
