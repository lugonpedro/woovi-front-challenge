import logoGrey from "../assets/logo_grey.png";
import secureIcon from "../assets/secure.png";

export function Footer() {
  return (
    <div className="flex justify-center items-center py-4">
      <img src={secureIcon} className="h-5" alt="Secure icon in grey color" />
      <p className="text-[#B2B2B2] text-[14px] ml-2">
        Pagamento 100% seguro via:
      </p>
      <img
        src={logoGrey}
        className="h-4 ml-1 mb-1"
        alt="Woovi logo in grey color"
      />
    </div>
  );
}
