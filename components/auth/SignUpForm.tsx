"use client";
import { useState } from "react";
import Image from "next/image";
import AuthFormLayout from "./AuthFormLayout";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Une erreur est survenue");
        setLoading(false);
        return;
      }

      // Connecter automatiquement l'utilisateur
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError("Compte créé mais erreur de connexion");
        router.push("/login");
      } else {
        router.push("/feed");
      }
      //eslint-disable-next-line
    } catch (error) {
      setError("Une erreur est survenue");
      setLoading(false);
    }
  };

  return (
    <div className="w-10/12 md:6/12 xl:w-6/12">
      <AuthFormLayout
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        error={error}
        loading={loading}
      />

      <div className="relative before:absolute before:w-full before:h-8 text-center py-4!">
        <span>ou</span>
      </div>

      <div className="flex justify-center items-center gap-2 py-2! w-full rounded-lg bg-white cursor-pointer hover:bg-gray-100 active:bg-white">
        <Image
          src={"/icon/google.svg"}
          alt="Icone Google"
          width={32}
          height={32}
        />
        <p className="font-semibold">
          Continuer avec Google {loading && "..."}
        </p>
      </div>
    </div>
  );
}
