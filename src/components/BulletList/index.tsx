import { BillingStore } from "../../contexts/BillingStore";
import { formatNumberToLocale } from "../../utils/formatNumberToLocale";
import "./index.css";

interface BulletListProps {
  parcels: number[];
}

export function BulletList({ parcels }: BulletListProps) {
  const { billing } = BillingStore();

  return (
    <div>
      {parcels.map((value, index) => (
        <li
          className={
            billing.pix
              ? "flex flex-row justify-between items-center green-border"
              : "flex flex-row justify-between items-center"
          }
        >
          <p className="text-[16px]">
            {index + 1}ª{" "}
            {parcels.length === 1
              ? "parcela no Pix"
              : index === 0
              ? "entrada no Pix"
              : "parcela no Cartão"}
          </p>
          <p className="text-[16px] font-extrabold">
            {formatNumberToLocale(value)}
          </p>
        </li>
      ))}
    </div>
  );
}
