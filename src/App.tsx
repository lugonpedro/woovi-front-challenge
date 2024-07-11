import { AnimatePresence, motion } from "framer-motion";
import { BillingStore } from "./contexts/BillingStore";
import Congrats from "./sections/Congrats";
import CreditPayment from "./sections/CreditPayment";
import { LandingPage } from "./sections/LandingPage";
import PixPayment from "./sections/PixPayment";

function App() {
  const { billing } = BillingStore();

  return (
    <div className="flex flex-col">
      <AnimatePresence>
        {billing.total === 0 &&
          billing.pix === false &&
          billing.card === false && (
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5 }}
              key="landing"
            >
              <LandingPage />
            </motion.div>
          )}
        {billing.total !== 0 &&
          billing.pix === false &&
          billing.card === false && (
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 1 }}
              key="pix"
            >
              <PixPayment />
            </motion.div>
          )}
        {billing.total !== 0 &&
          billing.pix === true &&
          billing.card === false && <CreditPayment />}
        {billing.total !== 0 &&
          billing.pix === true &&
          billing.card === true && <Congrats />}
      </AnimatePresence>
    </div>
  );
}

export default App;
