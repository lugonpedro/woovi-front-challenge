import { Divider } from "@mui/material";
import { BillingStore } from "../contexts/BillingStore";
import { formatNumberToLocale } from "../utils/formatNumberToLocale";
import { BulletList } from "./BulletList";
import { HowItWorks } from "./HowItWorks";

export function BillingInfo({}) {
  const { billing } = BillingStore();

  return (
    <>
      <div className="flex flex-col gap-4 px-4 my-4">
        <BulletList parcels={billing.parcels} />
        <Divider />
        <div className="flex flex-row justify-between">
          <p className="font-semibold">CET: 0,5%</p>
          <p className="font-semibold">
            Total: {formatNumberToLocale(billing.total)}
          </p>
        </div>
        <Divider />
        <HowItWorks />
        <Divider />
      </div>
      <div className="flex flex-col items-center">
        <p>Identificador:</p>
        <p>2c1b951f356c4680b13ba1c9fc889c47</p>
      </div>
    </>
  );
}
