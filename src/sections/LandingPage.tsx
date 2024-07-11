import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Parcel } from "../components/Parcel";
import { ParcelList } from "../components/ParcelList";
import { BillingStore } from "../contexts/BillingStore";

export function LandingPage() {
  const { setBilling } = BillingStore();

  return (
    <div className="flex flex-col gap-2 w-full max-w-[1280px] mx-auto">
      <Header />
      <h2 className="text-center font-extrabold text-[#4D4D4D]">
        João, como você quer pagar?
      </h2>
      <div className="p-4">
        <Parcel
          parcels={1}
          total={30500}
          cashback
          promo
          promoText="🤑 R$ 300,00 de volta no seu Pix na hora"
          tag="Pix"
          onClick={() => {
            setBilling({
              parcels: [30500],
              total: 30500,
              pix: false,
              card: false,
            });
          }}
        />
      </div>
      <div className="p-4">
        <ParcelList />
      </div>
      <Footer />
    </div>
  );
}
