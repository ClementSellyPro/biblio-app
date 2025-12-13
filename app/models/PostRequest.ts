import { Book } from "./BookType";

export interface PostRequest {
  book: Book | null;
  comment: string;
  note: number;
}
