import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import { formatNumberToLocale } from "../../utils/formatNumberToLocale";
import "./index.css";

interface ParcelProps {
  parcels: number;
  total: number;
  cashback?: boolean;
  promo?: boolean;
  promoText?: string;
  tag?: string;
  onClick: () => void;
}

export function Parcel({
  parcels,
  total,
  cashback,
  promo = false,
  promoText = "",
  tag,
  onClick,
}: ParcelProps) {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Card
      variant="outlined"
      className="first:before:rounded-xl first:before:font-extrabold first:before:text-[14px] first:before:py-0.5 first:before:px-4 first:before:bg-[#E5E5E5] first:before:ml-3 first:before:-mt-3 first:before:absolute first:before:content-[attr(before-dynamic-value)] first:rounded-t-xl last:rounded-b-xl cursor-pointer "
      before-dynamic-value={tag}
      onClick={() => {
        setChecked(!checked);
        onClick();
      }}
    >
      <CardContent className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-[18px]">
              <span className="font-extrabold">{parcels}x</span>{" "}
              {formatNumberToLocale(total / parcels)}
            </p>
            {parcels > 1 && (
              <p className="text-[14px] font-semibold text-[#AFAFAF]">
                Total: {formatNumberToLocale(total)}
              </p>
            )}
            {cashback && (
              <p className="text-[14px] font-semibold text-[#03D69D]">
                Ganhe 3% de Cashback
              </p>
            )}
          </div>
          <div>
            <input type="radio" checked={checked} />
          </div>
        </div>
        {promo && (
          <div className="relative">
            <div className="promo">
              <p className="text-[10px] font-extrabold text-[#FFFFFF] bg-[#133A6F] p-2 pr-8 w-full max-h-8">
                {promoText}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
