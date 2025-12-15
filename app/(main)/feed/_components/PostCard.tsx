import { PostWithAuthor } from "@/app/models/PostType";
import PostCardFooter from "./PostCardFooter";
import PostCardHeader from "./PostCardHeader";
// import Image from "next/image";

interface PostCardType {
  postData: PostWithAuthor;
}

export default function PostCard({ postData }: PostCardType) {
  return (
    <div>
      <PostCardHeader postAuthor={postData.author} />
      <p className="h-[400px] bg-blue-300 text-transparent">
        {/* {postData.image && (
          <Image
            src={postData.image}
            alt={postData.title}
            width={400}
            height={400}
          />
        )} */}
      </p>
      <PostCardFooter
        title={postData.title}
        comment={postData.content}
        note={postData.score}
      />
    </div>
  );
}
