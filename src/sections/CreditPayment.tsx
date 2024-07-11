import { useState } from "react";
import { BillingInfo } from "../components/BillingInfo";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BillingStore } from "../contexts/BillingStore";

export default function CreditPayment() {
  const [name, setName] = useState<string>("");

  const { billing } = BillingStore();

  function nextStep() {}

  return (
    <div className="flex flex-col gap-2 w-full max-w-[1280px] mx-auto">
      <Header />
      <h2 className="text-center font-extrabold text-[#4D4D4D]">
        João, pague o restante em {billing.parcels.length}x no cartão
      </h2>
      <div className="flex flex-col gap-4 items-center px-4">
        <input
          placeholder="Nome completo"
          defaultValue={"teste"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input placeholder="CPF" />
        <input placeholder="Número do cartão" />
        <div className="flex w-full flex-row justify-between gap-4">
          <input placeholder="Vencimento" />
          <input placeholder="CVV" />
        </div>
        {/* <FormControl fullWidth>
          <InputLabel>Parcelas</InputLabel>
          <Select label="Parcelas" defaultValue={1}>
            <MenuItem value={1}>
              {billing.parcels.length}x de{" "}
              {formatNumberToLocale(billing.parcels[0])}
            </MenuItem>
          </Select>
        </FormControl> */}
        <Button onClick={() => nextStep()} className="w-full">
          Pagar
        </Button>
      </div>
      <BillingInfo />
      <Footer />
    </div>
  );
}
