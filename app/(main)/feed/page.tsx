import { prisma } from "@/lib/prisma";
import PostCard from "./_components/PostCard";

export default async function FeedPage() {
  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: {
          id: true,
          name: true,
          image: true,
          status: true,
        },
      },
      _count: {
        select: {
          likes: true,
          comments: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} postData={post} />
      ))}
      {/* <PostCard />
      <PostCard />
      <PostCard /> */}
    </div>
  );
}
