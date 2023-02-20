import { Book } from "@prisma/client";

export default interface IBookService {
  getAll: () => Promise<Book[]>;
  getById: (id: string) => Promise<Book>;
  insert: (book: Book) => Promise<Book>;
}
