import { useState } from "react";
import { BillingInfo } from "../components/BillingInfo";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import SelectInput from "../components/SelectInput";
import { BillingStore } from "../contexts/BillingStore";
import { formatCardMaturity } from "../utils/formatCardMaturity";
import { formatCpf } from "../utils/formatCpf";
import { formatNumberToLocale } from "../utils/formatNumberToLocale";
import { numberMask } from "../utils/numberMask";

export default function CreditPayment() {
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [maturity, setMaturity] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");

  const { billing, setBilling } = BillingStore();

  function nextStep() {
    setBilling({
      parcels: billing.parcels,
      total: billing.total,
      pix: billing.pix,
      card: true,
    });
  }

  return (
    <div className="defaultContainer">
      <Header />
      <h2 className="text-center font-extrabold text-[#4D4D4D]">
        João, pague o restante em {billing.parcels.length}x no cartão
      </h2>
      <div className="flex flex-col gap-4 p-4">
        <Input
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(formatCpf(e.target.value))}
          maxLength={14}
        />
        <Input
          placeholder="Número do cartão"
          value={cardNumber}
          onChange={(e) => setCardNumber(numberMask(e.target.value))}
          maxLength={16}
        />
        <div className="flex flex-row justify-between gap-2">
          <Input
            placeholder="Vencimento"
            value={maturity}
            onChange={(e) => setMaturity(formatCardMaturity(e.target.value))}
            maxLength={5}
          />
          <Input
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength={3}
          />
        </div>
        <SelectInput
          placeholder="Parcelas"
          options={[
            {
              label: `${billing.parcels.length}x de
          ${formatNumberToLocale(billing.parcels[0])}`,
              value: "1",
            },
          ]}
          value={"1"}
          onChange={() => {}}
          disabled
        />
        <Button onClick={() => nextStep()} className="w-full">
          Pagar
        </Button>
      </div>
      <BillingInfo />
      <Footer />
    </div>
  );
}
