import AuthFormLayout from "@/components/auth/AuthFormLayout";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="relative flex justify-center items-center h-screen px-8! bg-linear-to-b from-white from-40% via-[#ACE0FF] via-80% to-[#CABCE9] to-95%">
      <div className="flex flex-col gap-8 w-full md:w-2/3 lg:w-1/2">
        <p className="font-semibold text-2xl text-center">
          Connexion au compte
        </p>
        <AuthFormLayout />

        <p className="text-center mt-4">
          Pas de compte ?{" "}
          <Link className="text-action font-semibold" href={"/"}>
            Créer un compte
          </Link>
        </p>
      </div>

      <Image
        className="absolute bottom-8"
        src={"/icon/logo.svg"}
        alt="Logo Biblio"
        width={100}
        height={100}
      />
    </div>
  );
}
