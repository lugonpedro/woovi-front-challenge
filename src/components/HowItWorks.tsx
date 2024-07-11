import chevronUpIcon from "../assets/chevron.png";

export function HowItWorks() {
  return (
    <div className="flex flex-row justify-between items-center">
      <p className="font-extrabold">Como funciona?</p>
      <img src={chevronUpIcon} />
    </div>
  );
}
