import { PostWithAuthor } from "@/app/models/PostType";
import PostCardFooter from "./PostCardFooter";
import PostCardHeader from "./PostCardHeader";
import Image from "next/image";

interface PostCardType {
  postData: PostWithAuthor;
}

export default function PostCard({ postData }: PostCardType) {
  return (
    <div>
      <PostCardHeader postAuthor={postData.author} />
      <div className="flex justify-center items-center h-[550px] overflow-hidden">
        {postData.image && (
          <Image
            src={postData.image}
            alt={postData.title}
            height={450}
            width={450}
            className="object-cover"
          />
        )}
      </div>
      <PostCardFooter
        title={postData.title}
        comment={postData.content}
        note={postData.score}
      />
    </div>
  );
}
