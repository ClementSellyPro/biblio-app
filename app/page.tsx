import SignUpForm from "@/components/auth/SignUpForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="relative flex h-screen bg-linear-to-b from-white from-40% via-[#ACE0FF] via-80% to-[#CABCE9] to-95%">
        <div className="hidden md:flex justify-center items-center h-screen w-6/12">
          <Image
            className="absolute md:left-0 lg:left-16 xl:left-40"
            src={"/books_illustration.png"}
            alt="Books - Livres"
            width={700}
            height={700}
          />
        </div>
        <div className="relative flex flex-col justify-center items-center h-screen w-full md:w-6/12 gap-9">
          <Image src={"/icon/logo.svg"} alt="Logo" width={130} height={130} />
          <div className="text-3xl font-light text-center leading-8 bg-linear-to-b from-sky-400 to-violet-500 bg-clip-text text-transparent">
            <p>
              Des livres. <br />
              Des amis.
              <br />
              Des histoires.
            </p>
          </div>

          <SignUpForm />

          <p className="absolute bottom-12 mt-8!">
            Deja un compte ?{" "}
            <Link href={"/login"} className="text-action font-semibold">
              Se connecter
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
