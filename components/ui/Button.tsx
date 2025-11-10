interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      type="button"
      className="min-w-60 h-10 bg-action rounded-xl text-white hover:cursor-pointer hover:bg-action-hover"
    >
      {children}
    </button>
  );
}
