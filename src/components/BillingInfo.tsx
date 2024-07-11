import { BillingStore } from "../contexts/BillingStore";
import { formatNumberToLocale } from "../utils/formatNumberToLocale";
import { BulletList } from "./BulletList";
import { HowItWorks } from "./HowItWorks";
import { Separator } from "./ui/separator";

export function BillingInfo({}) {
  const { billing } = BillingStore();

  const today = new Date();
  today.setMinutes(today.getMinutes() + 5);

  return (
    <>
      <div className="flex flex-col items-center px-12">
        <p className="text-[#B2B2B2] text-[16px]">Prazo de pagamento:</p>
        <p className="text-[#4D4D4D] text-[16px] font-extrabold">
          {today.toLocaleString("pt-br").substring(0, 17)}
        </p>
      </div>
      <div className="flex flex-col gap-4 px-4 my-4">
        <BulletList parcels={billing.parcels} />
        <Separator />
        <div className="flex flex-row justify-between">
          <p className="font-semibold">CET: 0,5%</p>
          <p className="font-semibold">
            Total: {formatNumberToLocale(billing.total)}
          </p>
        </div>
        <Separator />
        <HowItWorks />
        <Separator />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[#B2B2B2] font-semibold">Identificador:</p>
        <p className="text-[#4D4D4D] text-[12px] font-extrabold">
          2c1b951f356c4680b13ba1c9fc889c47
        </p>
      </div>
    </>
  );
}
