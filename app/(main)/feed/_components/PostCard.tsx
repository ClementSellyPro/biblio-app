import PostCardFooter from "./PostCardFooter";
import PostCardHeader from "./PostCardHeader";

export default function PostCard() {
  return (
    <div>
      <PostCardHeader />
      <p className="h-[400px] bg-blue-300 text-transparent">Image</p>
      <PostCardFooter />
    </div>
  );
}
