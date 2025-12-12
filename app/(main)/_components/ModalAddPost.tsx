"use client";

import Button from "@/components/ui/Button";
import { Dispatch, SetStateAction, useState } from "react";
import { Book } from "@/app/models/BookType";

interface ModalAddPostType {
  onToggleModal: Dispatch<SetStateAction<boolean>>;
}

export default function ModalAddPost({ onToggleModal }: ModalAddPostType) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  async function onSearchBook() {
    setLoading(true);

    try {
      const res = await fetch(
        `/api/books/search?q=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      console.log(data.items);
      setResults(data.items || []);
    } catch (error) {
      console.error("Erreur pendant recherche de livres: ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="absolute top-0 left-0 flex justify-center items-center h-screen w-full bg-black/20 z-50"
      onClick={() => onToggleModal(false)}
    >
      <div
        className="bg-white w-7/8 md:w-1/2 min-h-1/2 max-h-2/3 overflow-scroll rounded-xl p-4!"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-center text-4xl font-extralight">NOUVEAU POST</h2>

        <form className="flex flex-col gap-4 mt-8!">
          <div>
            <label>Recherche le livre:</label>
            <div className="relative flex items-center gap-2">
              <input
                className="pl-2! border w-full h-10 text-lg rounded-md outline-none focus:border-action focus:border-2"
                type="text"
                placeholder="Titre du livre"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
              <div className="w-1/2">
                <div onClick={onSearchBook}>
                  <Button variant="secondary">Rechercher</Button>
                </div>
              </div>

              <div className="absolute left-0 top-12 w-full min-h-44 px-4! py-2! border rounded-lg bg-white">
                <p>Resultats de votre recherche:</p>

                <ul>
                  {loading && "Recherche en cours..."}

                  {results.length > 0
                    ? results.map((book) => (
                        <li key={book.id}>{book.volumeInfo.title}</li>
                      ))
                    : null}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <label>Description:</label>
            <textarea
              className="pl-2! border w-full text-lg rounded-md resize-none outline-none focus:border-action focus:border-2"
              rows={5}
              placeholder="Ajouter une description, un avis"
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
