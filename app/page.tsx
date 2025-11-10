import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center items-center gap-9 h-screen bg-linear-to-b from-white from-40% via-[#ACE0FF] via-80% to-[#CABCE9] to-95%">
        <Image src={"/icon/logo.svg"} alt="Logo" width={130} height={130} />
        <div className="text-3xl font-light text-center leading-8">
          <p>
            Des livres. <br />
            Des amis.
            <br />
            Des histoires.
          </p>
        </div>
        <Button variant="primary">Créer un compte </Button>
      </main>
    </div>
  );
}
