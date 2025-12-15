import Image from "next/image";

interface PostCardHeaderType {
  postAuthor: {
    id: string;
    name: string | null;
    image: string | null;
    status: string | null;
  };
}

export default function PostCardHeader({ postAuthor }: PostCardHeaderType) {
  return (
    <div className="flex items-center gap-2 p-3!">
      {postAuthor.image ? (
        <Image
          src={postAuthor.image}
          alt="Photo Profile"
          width={35}
          height={35}
        />
      ) : (
        <div className="w-[35px] h-[35px] rounded-full bg-linear-to-t from-sky-500 to-indigo-500"></div>
      )}

      <div className="flex flex-col -gap-5">
        <p className="text-sm font-semibold">{postAuthor.name}</p>
        <p className="text-xs text-gray-600">
          {postAuthor.status ? postAuthor.status : "--------"}
        </p>
      </div>
    </div>
  );
}
