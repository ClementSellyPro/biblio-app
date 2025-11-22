import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-around h-20 pt-4! bg-gray-950 text-white">
      <Link href={"/feed"}>
        <Image
          src={"/icon/home.svg"}
          alt="Icone accueil"
          width={30}
          height={30}
        />
      </Link>
      <Link href={"/search"}>
        <Image
          src={"/icon/search.svg"}
          alt="Icone recherche"
          width={25}
          height={25}
        />
      </Link>
      <Link href={"/profile"}>
        <Image
          src={"/icon/temporary_profile.png"}
          alt="Icone profile"
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
}
