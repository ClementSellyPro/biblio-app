export default function AuthLayout() {
  return (
    <form className="flex flex-col items-center gap-4">
      <input
        placeholder="Adresse e-mail"
        className="p-2! w-full bg-white border border-gray-500 rounded-sm outline-none focus:border-violet-500"
        type="email"
        name="email"
        required
      />
      <input
        placeholder="Mot de passe"
        className="p-2! w-full bg-white border border-gray-500 rounded-sm outline-none focus:border-violet-500"
        type="password"
        name="password"
        minLength={8}
        required
      />
      <input
        placeholder="Nom de profile"
        className="p-2! w-full bg-white border border-gray-500 rounded-sm outline-none focus:border-violet-500"
        type="text"
        name="name"
        minLength={3}
        required
      />
      <button
        type="submit"
        className="bg-action hover:bg-blue-400 active:bg-action hover:cursor-pointer text-white rounded-full w-fit py-2! px-14! mt-4!"
      >
        S&apos;inscrire
      </button>
    </form>
  );
}
