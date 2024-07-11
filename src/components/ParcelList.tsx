import List from "@mui/material/List";
import { BillingStore } from "../contexts/BillingStore";
import { Parcel } from "./Parcel";

export function ParcelList() {
  const { setBilling } = BillingStore();

  return (
    <List>
      <Parcel
        parcels={2}
        total={30600}
        tag="Pix Parcelado"
        onClick={() => {
          setBilling({
            parcels: [15300, 15300],
            total: 30600,
            pix: false,
            card: false,
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
            pix: false,
            card: false,
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
            pix: false,
            card: false,
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
            pix: false,
            card: false,
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
            pix: false,
            card: false,
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
            pix: false,
            card: false,
          });
        }}
      />
    </List>
  );
}
