export interface PostRequest {
  book: {
    title: string;
    thumbnail: string | null;
    googleId: string;
  } | null;
  comment: string;
  note: number;
}
