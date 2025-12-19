interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  submit?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  variant,
  submit,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={submit ? "submit" : "button"}
      onClick={onClick}
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
