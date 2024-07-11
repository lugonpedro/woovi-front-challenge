import logo from "../assets/logo.png";

export function Header() {
  return (
    <div className="flex justify-center items-center py-4">
      <img src={logo} alt="Woovi logo in green color" />
    </div>
  );
}
