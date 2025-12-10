"use client";

import Button from "@/components/ui/Button";
import { Dispatch, SetStateAction } from "react";

interface ModalAddPostType {
  onToggleModal: Dispatch<SetStateAction<boolean>>;
}

export default function ModalAddPost({ onToggleModal }: ModalAddPostType) {
  return (
    <div
      className="absolute top-0 left-0 flex justify-center items-center h-screen w-full bg-black/20 z-50"
      onClick={() => onToggleModal(false)}
    >
      <div
        className="bg-white w-7/8 md:w-1/2 min-h-1/2 rounded-xl p-4!"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-center text-4xl font-extralight">NOUVEAU POST</h2>

        <form className="flex flex-col gap-4 mt-8!">
          <div>
            <label>Titre:</label>
            <input
              className="pl-2! border w-full h-10 text-lg rounded-md outline-none focus:border-action focus:border-2"
              type="text"
              placeholder="Titre du post"
            />
          </div>

          <div>
            <label>Description:</label>
            <textarea
              className="pl-2! border w-full h-10 text-lg rounded-md resize-none outline-none focus:border-action focus:border-2"
              rows={8}
              placeholder="Ajouter une description"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="note">Note:</label>
            <select id="note" className="border w-full h-10 rounded-md pl-2!">
              <option>--Choisissez une note--</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <Button variant="primary" submit>
            Valider
          </Button>
        </form>
      </div>
    </div>
  );
}
