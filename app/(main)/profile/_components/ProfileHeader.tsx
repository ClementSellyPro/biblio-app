"use client";

import { UserWithPosts } from "@/app/models/UserType";
import Image from "next/image";
import { useState } from "react";
import UpdateProfileModal from "./UpdateProfileModal";

interface ProfileHeaderType {
  user: UserWithPosts | null;
}

export default function ProfileHeader({ user }: ProfileHeaderType) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [localUser, setLocalUser] = useState<UserWithPosts | null>(user);

  function openUpdateModal() {
    setIsUpdating(true);
  }

  function handleProfileUpdated(updated: UserWithPosts) {
    setLocalUser(updated);
    setIsUpdating(false);
  }

  return (
    <div className="relative flex flex-col gap-4 p-4!">
      <div className="flex items-center gap-4">
        <div>
          <Image
            src={"/icon/temporary_profile.png"}
            alt="Profile picture"
            width={80}
            height={80}
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <div>
            <div>
              <p className="text-sm font-semibold"> {localUser?.name}</p>
              <p className="text-xs text-gray-500">
                {localUser?.status ?? "-------"}
              </p>
            </div>
          </div>

          {/* numbers section */}
          <div className="flex gap-10 text-xs">
            <div className="flex flex-col">
              <span className="font-bold">{localUser?._count.posts}</span>
              <span>publications</span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold">{localUser?._count.followers}</span>
              <span>readers</span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold">{localUser?._count.following}</span>
              <span>suivi(e)s</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm">
        <p>{localUser?.bio}</p>
      </div>

      <button
        className="py-2! rounded-lg text-sm bg-black hover:opacity-90 hover:cursor-pointer text-white"
        type="button"
        onClick={openUpdateModal}
      >
        Modifier
      </button>

      {isUpdating && (
        <UpdateProfileModal
          user={localUser}
          toggleUpdateModal={setIsUpdating}
          onProfileUpdated={handleProfileUpdated}
        />
      )}
    </div>
  );
}
