"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function AuthFormLayout() {
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
    <form className="flex flex-col items-center gap-4">
      <input
        placeholder="Adresse e-mail"
        className="p-2! w-full bg-white border border-gray-500 rounded-sm outline-none focus:border-violet-500"
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        placeholder="Mot de passe"
        className="p-2! w-full bg-white border border-gray-500 rounded-sm outline-none focus:border-violet-500"
        type="password"
        name="password"
        minLength={8}
        required
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <input
        placeholder="Nom de profile"
        className="p-2! w-full bg-white border border-gray-500 rounded-sm outline-none focus:border-violet-500"
        type="text"
        name="name"
        minLength={3}
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      {error !== "" ? <p className="text-red-500">{error}</p> : null}

      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-action hover:bg-blue-400 active:bg-action hover:cursor-pointer text-white rounded-full w-fit py-2! px-14! mt-4!"
      >
        S&apos;inscrire
        {loading ? "..." : null}
      </button>
    </form>
  );
}
