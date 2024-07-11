import { BillingStore } from "./contexts/BillingStore";
import Congrats from "./sections/Congrats";
import CreditPayment from "./sections/CreditPayment";
import { LandingPage } from "./sections/LandingPage";
import PixPayment from "./sections/PixPayment";

function App() {
  const billing = BillingStore((state) => state.billing);

  return (
    <div className="flex flex-col xl:items-center">
      {billing.parcels === 0 &&
        billing.total === 0 &&
        billing.pix === false &&
        billing.card === false && <LandingPage />}
      {billing.parcels !== 0 &&
        billing.total !== 0 &&
        billing.pix === false &&
        billing.card === false && <PixPayment />}
      {billing.parcels !== 0 &&
        billing.total !== 0 &&
        billing.pix === true &&
        billing.card === false && <CreditPayment />}
      {billing.parcels !== 0 &&
        billing.total !== 0 &&
        billing.pix === true &&
        billing.card === true && <Congrats />}
    </div>
  );
}

export default App;
