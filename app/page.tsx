import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex h-screen bg-linear-to-b from-white from-40% via-[#ACE0FF] via-80% to-[#CABCE9] to-95%">
        <div className="hidden md:flex justify-center items-center h-screen w-6/12">
          <Image
            className="w-full"
            src={"/book.png"}
            alt="Books - Livres"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col justify-center items-center h-screen w-full md:w-6/12 gap-9">
          <Image src={"/icon/logo.svg"} alt="Logo" width={130} height={130} />
          <div className="text-3xl font-light text-center leading-8">
            <p>
              Des livres. <br />
              Des amis.
              <br />
              Des histoires.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-8/12 lg:w-6/12">
            <Button variant="primary">Créer un compte </Button>
            <Button variant="secondary">Se Connecter </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
