import { formatNumberToLocale } from "../../utils/formatNumberToLocale";
import "./index.css";

interface BulletListProps {
  parcels: number[];
}

export function BulletList({ parcels }: BulletListProps) {
  return (
    <div>
      {parcels.map((value, index) => (
        <li className="flex flex-row justify-between items-center">
          <p className="text-[16px]">{index + 1}ª entrada no Pix</p>
          <p className="text-[16px] font-extrabold">
            {formatNumberToLocale(value)}
          </p>
        </li>
      ))}
    </div>
  );
}
