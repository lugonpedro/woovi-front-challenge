import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Parcel } from "../components/Parcel";
import { BillingStore } from "../contexts/BillingStore";

export function LandingPage() {
  const { billing, setBilling } = BillingStore();

  return (
    <div className="defaultContainer">
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
              pix: billing.pix,
              card: billing.card,
            });
          }}
        />
      </div>
      <div className="p-4">
        <Parcel
          parcels={2}
          total={30600}
          tag="Pix Parcelado"
          onClick={() => {
            setBilling({
              parcels: [15300, 15300],
              total: 30600,
              pix: billing.pix,
              card: billing.card,
            });
          }}
        />
        <Parcel
          parcels={3}
          total={30620}
          onClick={() => {
            setBilling({
              parcels: [10206.66, 10206.66, 10206.66],
              total: 30620,
              pix: billing.pix,
              card: billing.card,
            });
          }}
        />
        <Parcel
          parcels={4}
          total={30900}
          promo
          promoText="-3% de juros: Melhor opção de parcelamento"
          onClick={() => {
            setBilling({
              parcels: [7725, 7725, 7725, 7725],
              total: 30900,
              pix: billing.pix,
              card: billing.card,
            });
          }}
        />
        <Parcel
          parcels={5}
          total={31500}
          onClick={() => {
            setBilling({
              parcels: [6300, 6300, 6300, 6300, 6300],
              total: 31500,
              pix: billing.pix,
              card: billing.card,
            });
          }}
        />
        <Parcel
          parcels={6}
          total={31699.98}
          onClick={() => {
            setBilling({
              parcels: [5283.33, 5283.33, 5283.33, 5283.33, 5283.33, 5283.33],
              total: 31699.98,
              pix: billing.pix,
              card: billing.card,
            });
          }}
        />
        <Parcel
          parcels={7}
          total={31800}
          onClick={() => {
            setBilling({
              parcels: [
                4542.85, 4542.85, 4542.85, 4542.85, 4542.85, 4542.85, 4542.85,
              ],
              total: 31800,
              pix: billing.pix,
              card: billing.card,
            });
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
