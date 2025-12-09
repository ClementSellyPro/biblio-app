"use client";
import { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // const res = await fetch("/api/auth/register", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     email: formData.email,
      //     password: formData.password,
      //     redirect: false,
      //   }),
      // });

      // const data = await res.json();

      // if (!res.ok) {
      //   setError(data.error || "Une erreur est survenue");
      //   setLoading(false);
      //   return;
      // }

      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError("Email ou mot de passe incorrect");
        setLoading(false);
        return;
      }

      router.push("/feed");

      //eslint-disable-next-line
    } catch (error) {
      setError("Une erreur est survenue");
      setLoading(false);
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen px-8! bg-linear-to-b from-white from-40% via-[#ACE0FF] via-80% to-[#CABCE9] to-95%">
      <Link className="absolute top-8 left-8 hover:underline" href={"/"}>
        Retour à la page d&apos;inscription
      </Link>
      <div className="flex flex-col gap-8 w-full md:w-2/3 lg:w-1/2">
        <p className="font-semibold text-2xl text-center">
          Connexion au compte
        </p>
        {/* Formulaire de connexion */}
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center gap-4"
        >
          <input
            className="p-2! w-full bg-white border border-gray-500 rounded-sm outline-none focus:border-violet-500"
            type="email"
            placeholder="Adresse e-mail"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            className="p-2! w-full bg-white border border-gray-500 rounded-sm outline-none focus:border-violet-500"
            type="password"
            placeholder="Mot de passe"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          {error && <p className="text-red-500">{error}</p>}

          <Button variant="primary" submit>
            Se connecter {loading && "..."}
          </Button>
        </form>

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
