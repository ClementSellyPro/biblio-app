import { UserWithPosts } from "@/app/models/UserType";
import Button from "@/components/ui/Button";
import { Dispatch, SetStateAction, useState } from "react";

interface UpdateProfileModalType {
  user: UserWithPosts | null;
  toggleUpdateModal: Dispatch<SetStateAction<boolean>>;
}

export default function UpdateProfileModal({
  user,
  toggleUpdateModal,
}: UpdateProfileModalType) {
  const [updatedName, setUpdatedName] = useState<string | null>(null);
  const [updatedStatus, setUpdatedStatus] = useState<string | null>(null);
  const [updadatedBio, setUpdatedBio] = useState<string | null>(null);

  return (
    <div
      className="absolute top-0 left-0 flex justify-center items-center p-2! h-screen w-full bg-black/50"
      onClick={() => toggleUpdateModal(false)}
    >
      <div
        className="bg-white w-full rounded-xl py-4! max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-2xl text-center p-4!">Modifier votre profile</h1>
        <form className="flex flex-col gap-4 p-4!">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xl">
              Pseudo:
            </label>
            <input
              id="name"
              className="rounded-lg border p-2!"
              type="text"
              value={updatedName ?? user?.name ?? ""}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="status" className="text-xl">
              Status:
            </label>
            <input
              id="status"
              className="rounded-lg border p-2!"
              type="text"
              value={updatedStatus ?? user?.status ?? ""}
              onChange={(e) => setUpdatedStatus(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="bio" className="text-xl">
              Bio:
            </label>
            <input
              id="bio"
              className="rounded-lg border p-2!"
              type="text"
              value={updadatedBio ?? user?.bio ?? ""}
              onChange={(e) => setUpdatedBio(e.target.value)}
            />
          </div>
          <Button variant="primary" submit>
            Enregistrer les modifications
          </Button>
        </form>
      </div>
    </div>
  );
}
