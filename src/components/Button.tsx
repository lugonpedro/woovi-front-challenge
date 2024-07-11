import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#133A6F] text-white text-center justify-center font-semibold text-[14px] rounded-xl py-2 px-4 flex flex-row gap-2 ${className}`}
    >
      {children}
    </button>
  );
}
