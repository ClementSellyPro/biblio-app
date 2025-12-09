"use client";

import { usePathname } from "next/navigation";
import { FormEvent } from "react";
import { Dispatch, SetStateAction } from "react";
import Button from "../ui/Button";

interface FormDataType {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

interface AuthFormType {
  handleSubmit: (e: FormEvent) => Promise<void>;
  formData: FormDataType;
  setFormData: Dispatch<SetStateAction<FormDataType>>;
  error?: string;
  loading?: boolean;
}

export default function AuthFormLayout({
  handleSubmit,
  formData,
  setFormData,
  error,
  loading,
}: AuthFormType) {
  const pathname = usePathname();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
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

      <Button variant="primary" submit>
        {pathname === "/login" ? "Se connecter" : "S'inscrire"}
        {loading ? "..." : null}
      </Button>
    </form>
  );
}
