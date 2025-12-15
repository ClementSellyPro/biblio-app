import { Prisma } from "@prisma/client";

export interface Post {
  id: string;
  title: string;
  score: number;
  image: string | null;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  author: {
    id: string;
    name: string | null;
    image: string | null;
    status: string;
  };
  _count: {
    likes: number;
    comments: number;
  };
}

export type PostWithAuthor = Prisma.PostGetPayload<{
  include: {
    author: {
      select: {
        id: true;
        name: true;
        image: true;
        status: true;
      };
    };
    _count: {
      select: {
        likes: true;
        comments: true;
      };
    };
  };
}>;
