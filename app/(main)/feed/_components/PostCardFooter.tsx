"use client";

import Image from "next/image";
import { useState } from "react";

export default function PostCardFooter() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  function onLike() {
    setIsLiked((prev) => !prev);
  }

  function onBookmarked() {
    setIsBookmarked((prev) => !prev);
  }

  return (
    <div className="p-3!">
      {/* Icon interactions section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            onClick={onLike}
            src={`/icon/like${isLiked ? "" : "_empty"}.svg`}
            alt="Like"
            width={25}
            height={25}
          />
          <Image
            src={"/icon/comment_empty.svg"}
            alt="Comment"
            width={26}
            height={26}
          />
        </div>
        <Image
          onClick={onBookmarked}
          src={`/icon/bookmark${isBookmarked ? "" : "_empty"}.svg`}
          alt="Comment"
          width={18}
          height={20}
        />
      </div>

      <div className="py-2!">
        <p className="text-sm">
          <span className="font-bold">BOOK NAME:</span> This is a good book...
          to fall asleep !! Booooriiing xD
        </p>
      </div>

      <div>
        <p className="text-end font-bold">Note: 2/10</p>
      </div>
    </div>
  );
}
