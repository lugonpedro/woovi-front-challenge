import { Divider } from "@mui/material";
import { BillingStore } from "../contexts/BillingStore";
import { formatNumberToLocale } from "../utils/formatNumberToLocale";
import { BulletList } from "./BulletList";

export function BillingInfo({}) {
  const { billing } = BillingStore();

  return (
    <>
      <div className="flex flex-col px-4">
        <BulletList parcels={billing.parcels} />
        <Divider />
        <div className="flex flex-row justify-between">
          <p>CET: 0,5%</p>
          <p>Total: {formatNumberToLocale(billing.total)}</p>
        </div>
        <Divider />
        <p>Como funciona?</p>
        <Divider></Divider>
      </div>
      <div className="flex flex-col items-center">
        <p>Identificador:</p>
        <p>2c1b951f356c4680b13ba1c9fc889c47</p>
      </div>
    </>
  );
}
