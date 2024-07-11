import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

export function Input({
  placeholder,
  type = "text",
  value,
  onChange,
  maxLength,
}: InputProps) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#4D4D4D] bg-transparent rounded-lg border-2 border-[#E5E5E5] appearance-none focus:outline-none focus:ring-0 focus:border-[#03D69D] peer"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
      <label className="absolute text-sm text-[#B2B2B2] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#03D69D] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 pointer-events-none">
        {placeholder}
      </label>
    </div>
  );
}
