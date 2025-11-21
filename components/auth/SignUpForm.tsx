"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

interface SignUpFormProps {
  onSubmitData?: { name: string; email: string; password: string };
}

export default function SignUpForm({ onSubmitData }: SignUpFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex flex-col items-center gap-4 w-10/12 md:6/12 xl:w-6/12">
      <div className="flex flex-col gap-1 w-full">
        {/* <label className="text-sm" id="email">
          Adresse e-mail:
        </label> */}
        <input
          placeholder="Adresse e-mail"
          className="p-2! bg-white border border-gray-500 rounded-sm outline-none focus:border-violet-500"
          type="email"
          name="email"
          required
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        {/* <label className="text-sm" id="password">
          Mot de passe:
        </label> */}
        <input
          placeholder="Mot de passe"
          className="p-2! bg-white border border-gray-500 rounded-sm outline-none focus:border-violet-500"
          type="password"
          name="password"
          minLength={8}
          required
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        {/* <label className="text-sm" id="name">
          Nom de profile:
        </label> */}
        <input
          placeholder="Nom de profile"
          className="p-2! bg-white border border-gray-500 rounded-sm outline-none focus:border-violet-500"
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

      <div className="relative before:absolute before:w-full before:h-8">
        <span>ou</span>
      </div>

      <div
        className="flex justify-center items-center gap-2 py-2! w-full rounded-lg bg-white cursor-pointer hover:bg-gray-100 active:bg-white"
        onClick={() => signIn("google", { redirectTo: "/home" })}
      >
        <Image
          src={"/icon/google.svg"}
          alt="Icone Google"
          width={32}
          height={32}
        />
        <p className="font-semibold">Continuer avec Google</p>
      </div>
    </form>
  );
}
