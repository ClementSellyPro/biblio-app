import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col gap-4 p-4!">
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
              <p className="text-sm font-semibold">Magnus Carlsen</p>
              <p className="text-xs text-gray-500">Chess Reader</p>
            </div>
          </div>

          {/* numbers section */}
          <div className="flex gap-10 text-xs">
            <div className="flex flex-col">
              <span className="font-bold">3</span>
              <span>publications</span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold">13</span>
              <span>readers</span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold">130</span>
              <span>suivi(e)s</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm">
        <p>
          🌊 <br /> My little bio
        </p>
      </div>

      <button
        className="py-2! rounded-lg text-sm bg-black hover:opacity-90 hover:cursor-pointer text-white"
        type="button"
      >
        Modifier
      </button>
    </div>
  );
}
