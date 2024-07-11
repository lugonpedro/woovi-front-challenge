import logo from "../assets/logo.png";
import { Parcel } from "../components/Parcel";
import { ParcelList } from "../components/ParcelList";

export function LandingPage() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-[1280px]">
      <div className="flex justify-center items-center my-4 xl:justify-start xl:px-6">
        <img src={logo} className="logo" alt="Vite logo" />
      </div>
      <h2 className="text-center font-extrabold text-[#4D4D4D] xl:text-start xl:px-6">
        João, como você quer pagar?
      </h2>
      <div className="p-4">
        <Parcel
          parcels={1}
          total={30500}
          cashback
          promo
          promoText="🤑 R$ 300,00 de volta no seu Pix na hora"
          onClick={() => {}}
          tag="Pix"
        />
      </div>
      <div className="p-4">
        <ParcelList />
      </div>
    </div>
  );
}
