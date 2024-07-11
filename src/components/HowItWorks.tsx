import chevronUpIcon from "../assets/chevron.png";

export function HowItWorks() {
  return (
    <div className="flex flex-row justify-between items-center">
      <p className="font-extrabold text-[#4D4D4D]">Como funciona?</p>
      <img src={chevronUpIcon} />
    </div>
  );
}
