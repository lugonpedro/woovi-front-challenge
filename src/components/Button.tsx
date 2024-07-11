import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-[#133A6F] text-white font-semibold text-[16px] rounded-xl py-2 px-4 flex flex-row gap-2">
      {children}
    </button>
  );
}
