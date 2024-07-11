import { useEffect } from "react";
import { BillingStore } from "../contexts/BillingStore";

export default function PixPayment() {
  const { billing } = BillingStore();

  useEffect(() => {
    if (billing && billing.parcels > 0) {
      console.log(billing);
    }
  }, [billing]);

  return (
    <div>
      <p>Pix</p>
    </div>
  );
}
