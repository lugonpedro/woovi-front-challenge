import { BillingInfo } from "../components/BillingInfo";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BillingStore } from "../contexts/BillingStore";

export default function CreditPayment() {
  const { billing } = BillingStore();

  function nextStep() {}

  return (
    <div className="flex flex-col gap-2 w-full max-w-[1280px] mx-auto">
      <Header />
      <h2 className="text-center font-extrabold text-[#4D4D4D]">
        João, pague o restante em {billing.parcels.length}x no cartão
      </h2>
      <div className="flex flex-col gap-4 items-center px-4">
        <Button onClick={() => nextStep()} className="w-full">
          Pagar
        </Button>
      </div>
      <BillingInfo />
      <Footer />
    </div>
  );
}
