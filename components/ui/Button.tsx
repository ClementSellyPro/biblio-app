interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  submit?: boolean;
}

export default function Button({ children, variant, submit }: ButtonProps) {
  return (
    <button
      type={submit ? "submit" : "button"}
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
