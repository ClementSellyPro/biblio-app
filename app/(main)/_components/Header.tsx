"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  if (pathname.startsWith("/search")) return null;

  return (
    <div className="relative flex justify-center items-center h-14">
      <Image
        className="absolute left-4 top-5"
        src={"/icon/plus.svg"}
        alt="Plus icon"
        width={18}
        height={18}
      />
      <Image src={"/icon/logo.svg"} alt="Plus icon" width={100} height={20} />
    </div>
  );
}
