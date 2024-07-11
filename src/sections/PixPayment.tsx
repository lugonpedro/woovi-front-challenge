import pagesIcon from "../assets/pages.png";
import qrCode from "../assets/qrcode.png";
import { BillingInfo } from "../components/BillingInfo";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BillingStore } from "../contexts/BillingStore";
import { formatNumberToLocale } from "../utils/formatNumberToLocale";

export default function PixPayment() {
  const today = new Date();
  today.setMinutes(today.getMinutes() + 5);
  const { billing, setBilling } = BillingStore();

  function nextStep() {
    if (billing.parcels.length === 1) {
      console.log("Pago com sucesso");
      setBilling({
        parcels: billing.parcels,
        total: billing.total,
        pix: true,
        card: true,
      });
    } else {
      setBilling({
        parcels: billing.parcels,
        total: billing.total,
        pix: true,
        card: billing.card,
      });
    }
  }

  return (
    <div className="flex flex-col gap-2 w-full max-w-[1280px] mx-auto">
      <Header />
      <h2 className="text-center font-extrabold text-[#4D4D4D]">
        João, pague a {billing.parcels.length > 1 ? "entrada" : "parcela"} de{" "}
        {formatNumberToLocale(billing.total / billing.parcels.length)} pelo Pix
      </h2>
      <div className="flex flex-col gap-4 items-center px-12">
        <img
          src={qrCode}
          className="border-[#03D69D] border-2 rounded-xl p-2"
        />
        <Button onClick={() => nextStep()}>
          Copiar QRCode <img src={pagesIcon} className="bg-[#133A6F]" />
        </Button>
      </div>
      <div className="flex flex-col items-center px-12">
        <p className="text-[#B2B2B2] text-[16px]">Prazo de pagamento:</p>
        <p className="text-[#4D4D4D] text-[16px] font-extrabold">
          {today.toLocaleString("pt-br").substring(0, 17)}
        </p>
      </div>
      <BillingInfo />
      <Footer />
    </div>
  );
}
