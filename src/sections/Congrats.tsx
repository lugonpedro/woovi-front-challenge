import congratsIcon from "../assets/congrats.jpg";
import { Header } from "../components/Header";

export default function Congrats() {
  return (
    <div className="defaultContainer">
      <Header />
      <h2 className="text-center font-extrabold text-[#4D4D4D]">
        João, obrigado por comprar conosco!
      </h2>
      <img
        src={congratsIcon}
        className="w-[300px] mx-auto h-auto max-h-[50vh]"
      />
    </div>
  );
}
