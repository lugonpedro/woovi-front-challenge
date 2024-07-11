import { useEffect } from "react";
import congratsIcon from "../assets/congrats.jpg";
import { Header } from "../components/Header";
import { BillingStore } from "../contexts/BillingStore";

export default function Congrats() {
  const { setBilling } = BillingStore();

  useEffect(() => {
    setTimeout(() => {
      setBilling({
        parcels: [],
        total: 0,
        pix: false,
        card: false,
      });
    }, 10000);
  }, []);

  return (
    <div className="flex flex-col gap-2 w-full max-w-[1280px] mx-auto px-4">
      <Header />
      <h2 className="text-center font-extrabold text-[#4D4D4D]">
        João, obrigado por comprar conosco!
      </h2>
      <p className="text-center text-[12px] font-semibold text-[#4D4D4D]">
        Você será redirecionado de volta á página inicial em 10 segundos.
      </p>
      <img src={congratsIcon} />
    </div>
  );
}
