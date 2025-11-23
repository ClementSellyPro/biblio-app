import Image from "next/image";

export default function PostCardHeader() {
  return (
    <div className="flex items-center gap-2 p-3!">
      <Image
        src={"/icon/temporary_profile.png"}
        alt="Photo Profile"
        width={35}
        height={35}
      />
      <div className="flex flex-col -gap-5">
        <p className="text-sm font-semibold">Magnus Carlsen</p>
        <p className="text-xs text-gray-600">Chess reader</p>
      </div>
    </div>
  );
}
