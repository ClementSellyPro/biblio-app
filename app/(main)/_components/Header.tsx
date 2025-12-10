"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ModalAddPost from "./ModalAddPost";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  if (pathname.startsWith("/search")) return null;

  function onToggleModal() {
    setIsModalOpen((prev) => !prev);
    console.log(isModalOpen);
  }

  return (
    <div className="relative flex justify-center items-center h-14">
      <div
        className="absolute left-4 top-5 cursor-pointer"
        onClick={() => onToggleModal()}
      >
        <Image src={"/icon/plus.svg"} alt="Plus icon" width={18} height={18} />
      </div>
      <Image src={"/icon/logo.svg"} alt="Plus icon" width={100} height={20} />

      {isModalOpen && <ModalAddPost onToggleModal={onToggleModal} />}
    </div>
  );
}
