"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import AuthLayout from "./AuthLayout";

interface SignUpFormProps {
  onSubmitData?: { name: string; email: string; password: string };
}

export default function SignUpForm({ onSubmitData }: SignUpFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-10/12 md:6/12 xl:w-6/12">
      <AuthLayout />

      <div className="relative before:absolute before:w-full before:h-8 text-center py-4!">
        <span>ou</span>
      </div>

      <div
        className="flex justify-center items-center gap-2 py-2! w-full rounded-lg bg-white cursor-pointer hover:bg-gray-100 active:bg-white"
        onClick={() => signIn("google", { redirectTo: "/feed" })}
      >
        <Image
          src={"/icon/google.svg"}
          alt="Icone Google"
          width={32}
          height={32}
        />
        <p className="font-semibold">Continuer avec Google</p>
      </div>
    </div>
  );
}
