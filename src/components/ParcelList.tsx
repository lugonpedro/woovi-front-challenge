import List from "@mui/material/List";
import { Parcel } from "./Parcel";

export function ParcelList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Parcel
        parcels={2}
        total={30600}
        onClick={() => {}}
        tag="Pix Parcelado"
      />
      <Parcel parcels={3} total={30620} onClick={() => {}} />
      <Parcel
        parcels={4}
        total={30900}
        promo
        promoText="-3% de juros: Melhor opção de parcelamento"
        onClick={() => {}}
      />
      <Parcel parcels={5} total={31500} onClick={() => {}} />
      <Parcel parcels={6} total={31699.98} onClick={() => {}} />
      <Parcel parcels={7} total={31800} onClick={() => {}} />
    </List>
  );
}
