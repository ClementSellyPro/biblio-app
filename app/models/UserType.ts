import { Prisma } from "@prisma/client";

export type UserWithPosts = Prisma.UserGetPayload<{
  include: {
    posts: {
      include: {
        author: {
          select: {
            id: true;
            name: true;
            image: true;
          };
        };
        _count: {
          select: {
            likes: true;
            comments: true;
          };
        };
      };
    };
    _count: {
      select: {
        posts: true;
        followers: true;
        following: true;
        likedPosts: true;
      };
    };
  };
}>;
