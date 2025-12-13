"use client";

import Button from "@/components/ui/Button";
import { Dispatch, SetStateAction, useState } from "react";
import { Book } from "@/app/models/BookType";
import { PostRequest } from "@/app/models/PostRequest";

interface ModalAddPostType {
  onToggleModal: Dispatch<SetStateAction<boolean>>;
}

export default function ModalAddPost({ onToggleModal }: ModalAddPostType) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Book[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<PostRequest>({
    book: null,
    comment: "",
    note: 1,
  });

  async function onSearchBook() {
    setLoading(true);
    setIsSearching(true);

    try {
      const res = await fetch(
        `/api/books/search?q=${encodeURIComponent(query)}`
      );
      const data = await res.json();

      setResults(data.items || []);
    } catch (error) {
      console.error("Erreur pendant recherche de livres: ", error);
    } finally {
      setLoading(false);
    }
  }

  function onSelectBook(book: Book) {
    setForm((prev) => ({ ...prev, book: book }));
    setIsSearching(false);
  }

  function onSubmitPost(e: React.FormEvent) {
    e.preventDefault();
    console.log(form);
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

        <form onSubmit={onSubmitPost} className="flex flex-col gap-4 mt-8!">
          <div>
            <label>Recherche le livre:</label>
            <div className="relative flex items-center gap-2">
              <input
                className="pl-2! border w-full h-10 text-lg rounded-md outline-none focus:border-action focus:border-2"
                type="text"
                placeholder="Titre du livre"
                onChange={(e) => setQuery(e.target.value)}
                value={form?.book?.volumeInfo.title ?? query}
              />
              <div className="w-1/2">
                <div onClick={onSearchBook}>
                  <Button variant="secondary">Rechercher</Button>
                </div>
              </div>

              {isSearching && (
                <div className="absolute left-0 top-12 w-full min-h-44 max-h-72 overflow-scroll px-4! py-2! border rounded-lg bg-white">
                  <p className="font-semibold mb-4!">
                    Resultats de votre recherche:
                  </p>

                  <ul className="flex flex-col gap-2">
                    {loading && "Recherche en cours..."}

                    {results.length > 0
                      ? results.map((book) => (
                          <li
                            className="border-b py-2! hover:border-b-2 hover:font-semibold cursor-pointer"
                            key={book.id}
                            onClick={() => onSelectBook(book)}
                          >
                            {book.volumeInfo.title}
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div>
            <label>Description:</label>
            <textarea
              className="pl-2! border w-full text-lg rounded-md resize-none outline-none focus:border-action focus:border-2"
              rows={5}
              placeholder="Ajouter une description, un avis"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, comment: e.target.value }))
              }
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="note">Note:</label>
            <select
              id="note"
              className="border w-full h-10 rounded-md pl-2!"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, note: Number(e.target.value) }))
              }
            >
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
