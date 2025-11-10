interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}

export default function Button({ children, variant }: ButtonProps) {
  return (
    <button
      type="button"
      className={`w-full h-10 rounded-xl ${
        variant === "primary"
          ? "bg-action text-white hover:bg-action-hover"
          : variant === "secondary"
          ? "bg-white text-action border-action border hover:bg-action hover:text-white"
          : null
      }  hover:cursor-pointer `}
    >
      {children}
    </button>
  );
}
