"use client";

import { useState } from "react";

interface SignUpFormProps {
  onSubmitData?: { name: string; email: string; password: string };
}

export default function SignUpForm({ onSubmitData }: SignUpFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex flex-col items-center gap-4 w-10/12 md:6/12 xl:w-8/12">
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm" id="email">
          Adresse e-mail:
        </label>
        <input
          className="p-2! bg-white border rounded-sm outline-none focus:border-violet-500"
          type="email"
          name="email"
          required
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm" id="password">
          Mot de passe:
        </label>
        <input
          className="p-2! bg-white border rounded-sm outline-none focus:border-violet-500"
          type="password"
          name="password"
          minLength={8}
          required
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm" id="name">
          Nom de profile:
        </label>
        <input
          className="p-2! bg-white border rounded-sm outline-none focus:border-violet-500"
          type="text"
          name="name"
          minLength={3}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-action hover:bg-blue-400 active:bg-action hover:cursor-pointer text-white rounded-full w-fit py-2! px-14! mt-4!"
      >
        S&apos;inscrire
      </button>
    </form>
  );
}
