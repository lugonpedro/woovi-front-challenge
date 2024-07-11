import { create } from "zustand";

interface BillingProps {
  parcels: number[];
  total: number;
  pix: boolean;
  card: boolean;
}

type BillingStoreProps = {
  billing: BillingProps;
  setBilling: (billing: BillingProps) => void;
};

export const BillingStore = create<BillingStoreProps>((set) => ({
  billing: { parcels: [], total: 0, pix: false, card: false },
  setBilling: (billing: BillingProps) => set(() => ({ billing: billing })),
}));
